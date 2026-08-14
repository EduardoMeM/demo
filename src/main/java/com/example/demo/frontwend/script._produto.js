function cadastrarProduto() {
    let campoNomeproduto = document.getElementById("nome_produto").value;
    let campoPreco = document.getElementById("preco").value;
    let campoQuantidade = document.getElementById("quantidade_estoque").value;
    let campoDescricao = document.getElementById("descricao").value;
    const produto = {
        nome_produto: campoNomeproduto,
        preco: campoPreco,
        quantidade_estoque: campoQuantidade,
        descricao: campoDescricao
    };
    fetch('http://localhost:3333/produtos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto)
    }).then(response => {
        if (!response.ok) {
           response.text().then(texto=>{
            console.log(texto);
            alert(texto);
           });
        } else {
            alert("Produto cadastrado com sucesso!");
            cadastroLimpar();
        }}).catch(error => {
            console.error(error);
            alert("Erro ao cadastrar produto.")});
        }

function listar_produto() {
    console.log("Chamando API...");
    fetch('http://localhost:3333/produtos')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let tabela = document.getElementById("tabelaProdutos");
            tabela.innerHTML = "";
            data.forEach(produto => {
                tabela.innerHTML += `<tr>
                    <td>${produto.id_produto}</td>
                    <td>${produto.nome_produto}</td>
                    <td>${produto.preco}</td>
                    <td>${produto.quantidade_estoque}</td>
                    <td>${produto.descricao}</td>
                    <td>
                        <button style="background-color: salmon; color:black" onclick="deletar_produto(${produto.id_produto})">Deletar</button>
                        <button style="background-color: lightblue; color:black" onclick="atualizar_produto(${produto.id_produto})">Atualizar</button>
                    </td>
                </tr>`;
            });
        }).catch(error => {
            console.error(error);
            alert(error);
        })}

function buscar_produto() {
    let campoId = document.getElementById("id_produto").value;
    console.log("Chamando API...");
    fetch(`http://localhost:3333/produtos/${campoId}`)
        .then(response => response.json())
        .then(produto => {
            let tabela = document.getElementById("tabelaProdutos");
            tabela.innerHTML = "";
            tabela.innerHTML += `<tr>
                <td>${produto.id_produto}</td>
                <td>${produto.nome_produto}</td>
                <td>${produto.preco}</td>
                <td>${produto.quantidade_estoque}</td>
            </tr>`;
        }).catch(error => {
            console.error(error);
            alert(error);
        })}

function deletar_produto(id) {
    console.log("Chamando API...");
    fetch(`http://localhost:3333/produtos/${id}`, {
        method: 'DELETE'
    }).then(response => {
        if (!response.ok) {
            alert("Erro ao deletar produto");
        } else {
            alert("Produto deletado com sucesso!");
            listar_produto();
        }}).catch(error => {
            console.error(error);
            alert("Erro ao deletar produto.");
        })}

function atualizar_produto(id) {
    let campoNomeproduto = document.getElementById("nome_produto").value;
    let campoPreco = document.getElementById("preco").value;
    let campoQuantidade = document.getElementById("quantidade_estoque").value;
    let campoDescricao = document.getElementById("descricao").value;
    const produto = {
        nome_produto: campoNomeproduto,
        preco: campoPreco,
        quantidade_estoque: campoQuantidade,
        descricao: campoDescricao
    };
    fetch(`http://localhost:3333/produtos/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto)
    }).then(response => {
        if (!response.ok) {
            alert("Erro ao atualizar produto");
        } else {
            alert("Produto atualizado com sucesso!");
            listar_produto();
            cadastroLimpar();
        }}).catch(error => {
            console.error(error);
            alert("Erro ao atualizar produto.");
        })}

    

function cadastroLimpar(){
        let campoId = document.getElementById("id_produto").value="";
        let campoNomeproduto =document.getElementById("nome_produto").value="";
        let campoPreco=document.getElementById("preco").value="";
        let campoQuantidade=document.getElementById("quantidade_estoque").value="";
        let campoDescricao=document.getElementById("descricao").value="";
    }

window.onload = function() {
    listar_produto();
}