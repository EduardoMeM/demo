function cadastrarVenda() {
    let campoVenda = document.getElementById("venda").value;
    let campoProduto = document.getElementById("produto").value;
    let campoQuantidade = document.getElementById("quantidade").value;
    let campoPreçoUnitário = document.getElementById("precounitario").value;
    let campoSubtotal = document.getElementById("subtotal").value;
    const itemvenda = {
        venda: campoVenda,
        produto: campoProduto,
        quantidade: campoQuantidade,
        precounitario: campoPreçoUnitário,
        subtotal: campoSubtotal
    };
    fetch('http://localhost:3333/itemvenda', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(itemvenda)
    }).then(response => {
        if (!response.ok) {
            alert("Erro ao cadastrar item da venda");
        } else {
            alert("Item da venda cadastrado com sucesso!");
            cadastroLimpar();
        }}).catch(error => {
            console.error(error);
            alert("Erro ao cadastrar item da venda.");
        })}
function listar_itemvenda() {
    console.log("Chamando API...");
    fetch('http://localhost:3333/itemvenda')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            tabela = document.getElementById("tabelaItemVenda");
            tabela.innerHTML = "";
            data.forEach(itemvenda => {
                tabela.innerHTML += `<tr>
                    <td>${itemvenda.id_itemvenda}</td>
                    <td>${itemvenda.venda}</td>
                    <td>${itemvenda.produto}</td>
                    <td>${itemvenda.quantidade}</td>
                    <td>${itemvenda.precounitario}</td>
                    <td>${itemvenda.subtotal}</td>
                    <td>
                                        <button style="background-color: salmon; color:black" onclick="deletar_itemvenda(${cliente.id_cliente})">Deletar</button>
                                        <button style="background-color: lightblue; color:black" onclick="atualizar_itemvenda(${cliente.id_cliente})">Atualizar</button>
                    </td>
                </tr>`;
            });
        }).catch(error => {
            console.error(error);
            alert(error);
        })}

function buscar_itemvenda() {
    let campoId = document.getElementById("id").value;
    console.log("Chamando API...");
    fetch(`http://localhost:3333/itemvenda/${campoId}`)
        .then(response => response.json())
        .then(itemvenda => {
            let tabela = document.getElementById("tabelaItemVenda");
            tabela.innerHTML = "";
            tabela.innerHTML += `<tr>
                <td>${itemvenda.id_itemvenda}</td>
                <td>${itemvenda.venda}</td>
                <td>${itemvenda.produto}</td>
                <td>${itemvenda.quantidade}</td>
                <td>${itemvenda.precounitario}</td>
                <td>${itemvenda.subtotal}</td>
            </tr>`;
        }).catch(error => {
            console.error(error);
            alert(error);
        })}

function atualizar_itemvenda() {
    let campoId = document.getElementById("id").value;
    let campoVenda = document.getElementById("venda").value;
    let campoProduto = document.getElementById("produto").value;
    let campoQuantidade = document.getElementById("quantidade").value;
    let campoPreçoUnitário = document.getElementById("precounitario").value;
    let campoSubtotal = document.getElementById("subtotal").value;
    const itemvenda = {
        venda: campoVenda,
        produto: campoProduto,
        quantidade: campoQuantidade,
        precounitario: campoPreçoUnitário,
        subtotal: campoSubtotal
    };
    fetch(`http://localhost:3333/itemvenda/${campoId}`, {
       method: 'PUT',
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(itemvenda)
    }).then(response => {
        if (!response.ok) {
            alert("Erro ao atualizar item da venda");
        } else {
            alert("Item da venda atualizado com sucesso!");
            cadastroLimpar();
        }}).catch(error => {
            console.error(error);
            alert("Erro ao atualizar item da venda.");
        })}

function deletar_itemvenda() {
    let campoId = document.getElementById("id").value;
    console.log("Chamando API...");
    fetch(`http://localhost:3333/itemvenda/${campoId}`, { 
        method: 'DELETE'
    }).then(response => {
        if (!response.ok) {
            alert("Erro ao deletar item da venda");
        } else {
            alert("Item da venda deletado com sucesso!");
            cadastroLimpar();
        }}).catch(error => {
            console.error(error);
            alert("Erro ao deletar item da venda.");
        })}



function  cadastroLimpar(){
    let campoVenda = document.getElementById("venda").value="";
    let campoProduto = document.getElementById("produto").value="";
    let campoQuantidade = document.getElementById("quantidade").value="";
    let campoPreçoUnitário = document.getElementById("precounitario").value="";
    let campoSubtotal =document.getElementById("subtotal").value="";
    }    

windows.onload = function() {
    listar_itemvenda();}