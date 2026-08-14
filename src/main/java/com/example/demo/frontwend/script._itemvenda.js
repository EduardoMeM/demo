function cadastrar_itemvenda() {
    let campoVenda = document.getElementById("venda").value;
    let campoProduto = document.getElementById("produto").value;
    let campoQuantidade = document.getElementById("quantidade").value;
    let campoPreçoUnitário = document.getElementById("preco_unitario").value;
    let campoSubtotal =campoQuantidade*campoPreçoUnitário;
    document.getElementById("subtotal").value = campoSubtotal;
    const itemvenda = {
        venda:{id_venda:campoVenda},
        produto: {id_produto:campoProduto},
        quantidade: campoQuantidade,
        preco_unitario: campoPreçoUnitário,
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
        let tabela = document.getElementById("tabelaItemVenda");
        tabela.innerHTML = "";
        data.forEach(itemvenda => {
            tabela.innerHTML += `
                <tr>
                    <td>${itemvenda.id_itemvenda}</td>
                    <td>${itemvenda.venda ? itemvenda.venda.id_venda : ""}</td>
                    <td>${itemvenda.produto ? itemvenda.produto.id_produto : ""}</td>
                    <td>${itemvenda.quantidade}</td>
                    <td>${itemvenda.preco_unitario}</td>
                    <td>${itemvenda.subtotal}</td>
                    <td>
                         <button style="background-color: salmon; color:black" onclick="deletar_venda(${venda.id_venda})">Deletar</button>
                         <button style="background-color: lightblue; color:black" onclick="atualizar_venda(${venda.id_venda})">Atualizar</button>
                    </td>
                </tr>
            `;
        });
    })
    .catch(error => {
        console.error(error);
        alert("Erro ao listar itens da venda.");
    });
}

function buscar_itemvenda() {
    let campoId = document.getElementById("id").value;
    console.log("Chamando API...");
    fetch(`http://localhost:3333/itemvenda/${campoId}`)
        .then(response => response.json())
        .then(itemvenda => {
            let tabela = document.getElementById("tabelaItemVenda");
            tabela.innerHTML = "";
            tabela.innerHTML += 
            `<tr>
                <td>${itemvenda.id_itemvenda}</td>
                <td>${itemvenda.venda.id_venda}</td>
                <td>${itemvenda.produto.id_produto}</td>
                <td>${itemvenda.quantidade}</td>
                <td>${itemvenda.precounitario}</td>
                <td>${itemvenda.subtotal}</td>
            </tr>`;
        }).catch(error => {
            console.error(error);
            alert(error);
        })}

function atualizar_itemvenda(id) {
    let campoId = document.getElementById("id").value;
    let campoVenda = document.getElementById("venda").value;
    let campoProduto = document.getElementById("produto").value;
    let campoQuantidade = document.getElementById("quantidade").value;
    let campoPreçoUnitário = document.getElementById("preco_unitario").value;
    let campoSubtotal = document.getElementById("subtotal").value;
    const itemvenda = {
        venda:{id_venda:campoVenda},
        produto: {id_produto:campoProduto},
        quantidade: campoQuantidade,
        preco_unitario: campoPreçoUnitário,
        subtotal: campoSubtotal
    };
    fetch(`http://localhost:3333/itemvenda/${id}`, {
       method: 'PUT',
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify(itemvenda)
    }).then(response => {
        if (!response.ok) {
            alert("Erro ao atualizar item da venda");
        } else {
            alert("Item da venda atualizado com sucesso!");
            listar_itemvenda();
            cadastroLimpar();
        }}).catch(error => {
            console.error(error);
            alert("Erro ao atualizar item da venda.");
        })}

function deletar_itemvenda(id) {
    console.log("Chamando API...");
    if(!confirm("Tem certeza que deseja deletar o cliente?")){
        return;
    }
    fetch(`http://localhost:3333/itemvenda/${id}`, { 
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
    let campoPreçoUnitário = document.getElementById("preco_unitario").value="";
    let campoSubtotal =document.getElementById("subtotal").value="";
    }    

window.onload = function() {
    listar_itemvenda();}