let campoCliente = document.getElementById("cliente").value;
let campoData = document.getElementById("data").value;
let campoValortotal = document.getElementById("valortotal").value;
let campoForma = document.getElementById("formadepagamento").value;
let campoStatus = document.getElementById("status").value;
function cadastrarVenda() {
    let campoCliente = document.getElementById("cliente").value;
    let campoData = document.getElementById("data").value;
    let campoValortotal = document.getElementById("valortotal").value;
    let campoForma = document.getElementById("formadepagamento").value;
    let campoStatus = document.getElementById("status").value;
    alert(campoCliente);
    alert(campoData);
    alert(campoValortotal);
    alert(campoForma);
    alert(campoStatus);
}
function  cadastroLimpar(){
    let campoCliente = document.getElementById("cliente").value="";
    let campoData = document.getElementById("data").value="";
    let campoValortotal = document.getElementById("valortotal").value='';
    let campoForma = document.getElementById("formadepagamento").value="";
    let campoStatus =document.getElementById("status").value="";
    }    