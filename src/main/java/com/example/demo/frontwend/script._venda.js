
function cadastrarVenda() {
    let campoId=document.getElementById("id_venda").value;
    let campoCliente = document.getElementById("cliente").value;
    let campoData = document.getElementById("data_venda").value;
    let campoValortotal = document.getElementById("valor_total").value;
    let campoForma = document.getElementById("formade_pagamento").value;
    let campoStatus = document.getElementById("statu").value;
    const venda= {
        id_venda=campoId,
        cliente=campoCliente,
        data_cliente=campoData,
        valor_total=campoForma,
        formade_pagamento=campoForma,
        statu=campoStatus
    };
    fetch('http://localhost:3333/venda',{
        method="POST",
        headers: {
         'Content-Type': 'application/json'
        },
        body : JSON.stringify(venda)
    }).then(response=>{
        if (!response.ok){
           alert("Error ao cadastrar produto") 
        }else{
           alert("Produto cadastrado com sucesso!")
           cadastroLimpar();
        }
    }).catch(Error=>{
        console.log(Error)
        alert("Error ao cadastrar produto.")
    })

}
function listar_venda(){
    console.log("Chamando API...")
    fetch('http://localhost:3333/venda')
    .then(response=>response.JSON())
    .then(data=>{
        console.log(data);
        let tabela= document.getElementById("venda")
        tabela.innerHTML +=<th>
             <td>${venda.id_venda}</td>
             <td>${venda.cliente}</td>
             <td>${venda.data_venda}</td>
             <td>${venda.formade_pagamento}</td>
             <td>${venda.statu}</td>
             <td>
                <button style="background-color: salmon; color:black" onclick="deletar_venda(${produto.id_venda})">Deletar</button>
                <button style="background-color: lightblue; color:black" onclick="atualizar_venda(${venda.id_venda})">Atualizar</button>
            </td>
        </th>

    })
}

function buscar_venda(){
       let campoId = document.getElementById("id_cliente").value;
       console.log("Chamando API...");
       fetch(`http://localhost:3333/venda/${campoId}`)
         .then(response=>response.json())
         .then(venda=>{
            let tabela = document.getElementById("tabelaVenda")
            tabela.innerHTML = "";
            tabela.innerHTML += `<th>
            <td>${venda.id_venda}</td>
            <td>${venda.cliente}</td>
            <td>${venda.data_venda}</td>
            `
         } )

    

}

function  cadastroLimpar(){
    let compoId = document.getElementById("Id").value="";
    let campoCliente = document.getElementById("cliente").value="";
    let campoData = document.getElementById("data").value="";
    let campoValortotal = document.getElementById("valortotal").value='';
    let campoForma = document.getElementById("formade_pagamento").value="";
    let campoStatus =document.getElementById("statu").value="";
    }    