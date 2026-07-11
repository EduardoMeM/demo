function cadastrarCliente() {
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
            alert("Erro ao cadastrar cliente.");});

function listar_clientes(){
    fetch('http://localhost:3333/clientes')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let tabela = document.getElementById("tabelaclientes");
            tabela.innerHTML = "";
            data.forEach(cliente => {
                tabela.innerHTML += `<tr>
                    <td>${cliente.nome_cliente}</td>
                    <td>${cliente.email_cliente}</td>
                    <td>${cliente.telefone_cliente}</td>
                </tr>`;
            });
        })
            .catch(error => {
                console.log(error);
                alert("Erro ao listar clientes.");
            });
}
          
function cadastroLimpar(){
    let campoNome = document.getElementById("nome").value="";
    let campoEmail = document.getElementById("email").value="";
    let campoTelefone = document.getElementById("telefone").value="";
}}
