function cadastrarCliente() {
    let campoId=document.getElementById("id").value;
    let campoNome = document.getElementById("nome").value;
    let campoEmail = document.getElementById("email").value;
    let campoTelefone = document.getElementById("telefone").value;
    
    const cliente = {
        nome_cliente: campoNome,
        email_cliente: campoEmail,
        telefone_cliente: campoTelefone
    };
    fetch('http://localhost:3333/clientes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
        }).then(response =>{ 
            if(!response.ok){
            alert("Erro ao cadastrar cliente");
        }else{
            alert("Cliente cadastrado com sucesso!");cadastroLimpar();
        }
        }).catch (error=> {
            console.error(error);
            alert("Erro ao cadastrar cliente.");});}

function listar_cliente(){
    console.log("Chamando API...");
    fetch('http://localhost:3333/clientes')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let tabela = document.getElementById("tabelaClientes");
            tabela.innerHTML = "";
            data.forEach(cliente => {
                tabela.innerHTML += `<tr>
                    <td>${cliente.id_cliente}</td>
                    <td>${cliente.nome_cliente}</td>
                    <td>${cliente.email_cliente}</td>
                    <td>${cliente.telefone_cliente}</td>
                    <td>
                    <button style="background-color: salmon; color:black" onclick="deletar_cliente(${cliente.id_cliente})">Deletar</button>
                    <button style="background-color: lightblue; color:black" onclick="atualizar_cliente(${cliente.id_cliente})">Atualizar</button>
                    </td>
                </tr>`;
            });
        })
            .catch(error => {
                console.error(error);
                alert(error);
            });
}

function buscar_cliente(){
    let campoId = document.getElementById("id").value;
    console.log("Chamando API...");
    fetch(`http://localhost:3333/clientes/${campoId}`)
    .then(response => response.json())
    .then(cliente => {
        let tabela = document.getElementById("tabelaClientes");
        tabela.innerHTML = "";
        tabela.innerHTML += `<tr>
            <td>${cliente.id_cliente}</td>
            <td>${cliente.nome_cliente}</td>
            <td>${cliente.email_cliente}</td>
            <td>${cliente.telefone_cliente}</td>
        </tr>`;
    }).catch(error=>{
        console.error(error);
        alert("Cliente não encontrado.")
    });
}
function deletar_cliente(id_cliente){
    if(!confirm("Tem certeza que deseja deletar o cliente?")){
        return;
    }
    fetch(`http://localhost:3333/clientes/${id_cliente}`, {
        method: 'DELETE'
    }).then(response => {
        if(response.ok){
            alert("Cliente deletado com sucesso!");
            listar_cliente();
        }else{
            alert("Error ao deletar cliente.");
        }
    }).catch(error => {
        console.error(error);
        alert("Error ao deletar cliente.");
    });}

function atualizar_cliente(id_cliente){
    let campoNome = document.getElementById("nome").value;
    let campoEmail = document.getElementById("email").value;
    let campoTelefone = document.getElementById("telefone").value;
    const cliente = {
        nome_cliente: campoNome,
        email_cliente: campoEmail,
        telefone_cliente: campoTelefone};
    fetch(`http://localhost:3333/clientes/${id_cliente}`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cliente)
    }).then(response => {
        if(response.ok){
            alert("Cliente atualizado com sucesso!");
            listar_cliente();
            cadastroLimpar();
        }else{
            alert("Erro ao atualizar cliente.");
        }}).catch(error => {
        console.error(error);
        alert("Erro ao atualizar cliente.");
    });}
          
function cadastroLimpar(){
    let campoNome = document.getElementById("nome").value="";
    let campoEmail = document.getElementById("email").value="";
    let campoTelefone = document.getElementById("telefone").value="";
}
window.onload = function() {
    listar_cliente();
}
