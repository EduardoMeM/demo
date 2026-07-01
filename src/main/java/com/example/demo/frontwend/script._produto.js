let campoNomeproduto = document.getElementById("nomeproduto").value;
let campoPreco = document.getElementById("preco").value;
let campoQuantidade = document.getElementById("quantidade").value;
function cadastrarProduto() {
    let campoNomeproduto = document.getElementById("nomeproduto").value;
    let campoPreco = document.getElementById("preco").value;
    let campoQuantidade = document.getElementById("quantidade").value;
    alert(campoNomeproduto);
    alert(campoPreco);
    alert(campoQuantidade);
}

function cadastroLimpar(){
        let campoNomeproduto =document.getElementById("nomeproduto").value="";
        let campoPreco=document.getElementById("preco").value="";
        let campoQuantidade=document.getElementById("quantidade").value="";
    }