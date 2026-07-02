let campoVenda = document.getElementById("venda").value;
let campoProduto = document.getElementById("produto").value;
let campoQuantidade = document.getElementById("quantidade").value;
let campoPreçoUnitário = document.getElementById("precounitario").value;
let campoSubtotal = document.getElementById("subtotal").value;
function cadastrarVenda() {
    let campoVenda = document.getElementById("venda").value;
    let campoProduto = document.getElementById("produto").value;
    let campoQuantidade = document.getElementById("quantidade").value;
    let campoPreçoUnitário = document.getElementById("precounitario").value;
    let campoSubtotal = document.getElementById("subtotal").value;
    alert(campoVenda);
    alert(campoProduto);
    alert(campoQuantidade);
    alert(campoPreçoUnitário);
    alert(campoSubtotal);
}
function  cadastroLimpar(){
    let campoVenda = document.getElementById("venda").value="";
    let campoProduto = document.getElementById("produto").value="";
    let campoQuantidade = document.getElementById("quantidade").value="";
    let campoPreçoUnitário = document.getElementById("precounitario").value="";
    let campoSubtotal =document.getElementById("subtotal").value="";
    }    