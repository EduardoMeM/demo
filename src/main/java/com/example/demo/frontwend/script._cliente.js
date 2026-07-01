let campoNome = document.getElementById("nome").value;
let campoEmail = document.getElementById("email").value;
let campoTelefone = document.getElementById("telefone").value;
function cadastrarCliente() {
    let campoNome = document.getElementById("nome").value;
    let campoEmail = document.getElementById("email").value;
    let campoTelefone = document.getElementById("telefone").value;
    alert(campoNome);
    alert(campoEmail);
    alert(campoTelefone);
}
function cadastroLimpar(){
    let campoNome = document.getElementById("nome").value="";
    let campoEmail = document.getElementById("email").value="";
    let campoTelefone = document.getElementById("telefone").value="";
}