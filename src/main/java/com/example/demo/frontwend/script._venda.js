function cadastrarVenda() {
    let campoId=document.getElementById("id_venda").value;
    let campoCliente = document.getElementById("cliente").value;
    let campoData = document.getElementById("data_venda").value;
    let campoValortotal = document.getElementById("valor_total").value;
    let campoForma = document.getElementById("formade_pagamento").value;
    let campoStatus = document.getElementById("statu").value;
    const venda= {
        id_venda:campoId,
        cliente:{id_cliente: campoCliente},
        data_venda:campoData,
        valor_total: campoValortotal,
        formade_pagamento:campoForma,
        statu:campoStatus
    };
    fetch('http://localhost:3333/venda',{
        method:"POST",
        headers: {
         'Content-Type': 'application/json'
        },
        body : JSON.stringify(venda)
    }).then(response=>{
        if (!response.ok){
           alert("Error ao cadastrar venda") 
        }else{
           alert("Venda cadastrado com sucesso!")
           listar_venda();
           cadastroLimpar();
        }
    }).catch(Error=>{
        console.log(Error)
        alert("Error ao cadastrar venda.")
    })

}
function listar_venda() {
    console.log("Chamando API...");

    fetch('http://localhost:3333/venda', {
        cache: 'no-store'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao buscar vendas");
        }
        return response.json();
    })
    .then(data => {
        console.log("Vendas recebidas:", data);

        let tabela = document.getElementById("tabelaVenda");
        tabela.innerHTML = "";

        data.forEach(venda => {

            let nomeCliente = "Sem cliente";

            if (venda.cliente && venda.cliente.nome_cliente) {
                nomeCliente = venda.cliente.nome_cliente;
            }

            tabela.innerHTML +=
                tabela.innerHTML += `
    <tr>
        <td>${venda.id_venda}</td>
        <td>${nomeCliente}</td>
        <td>${venda.data_venda}</td>
        <td>${venda.valor_total}</td>
        <td>${venda.formade_pagamento}</td>
        <td>${venda.statu}</td>
        <td>
            <button style="background-color: salmon; color:black" onclick="deletar_venda(${venda.id_venda})">Deletar</button>
            <button style="background-color: lightblue; color:black" onclick="atualizar_venda(${venda.id_venda})">Atualizar</button>
        </td>
    </tr>
`;
        });
    })
    .catch(error => {
        console.error("Erro no listar_venda:", error);
        alert("Erro ao listar vendas.");
    });
}


function buscar_venda(id) {
    let campoId = document.getElementById("id_venda").value;
    console.log("Chamando API...");
    fetch(`http://localhost:3333/venda/${campoId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Venda não encontrada");
            }
            return response.json();
        })
        .then(venda => {
            let tabela = document.getElementById("tabelaVenda");
            tabela.innerHTML = "";
            tabela.innerHTML += `
                <tr>
                    <td>${venda.id_venda}</td>
                    <td>${venda.cliente.nome_cliente}</td>
                    <td>${venda.data_venda}</td>
                    <td>${venda.valor_total}</td>
                    <td>${venda.formade_pagamento}</td>
                    <td>${venda.statu}</td>
                </tr>
            `;
        })
        .catch(error => {
            console.error(error);
            alert("Erro ao buscar venda.");
        });
}

function deletar_venda(id){
    console.log("Chamando API...")
    fetch(`http://localhost:3333/venda/${id}`, {
        method:'DELETE'
    }).then(response =>{
        if(!response.ok){
            alert("Error ao deletar venda")
        }else{
            alert("Venda deletada com sucesso!")
            listar_venda();
        }
    }).catch(error=>{
        console.error(error);
        alert("Error ao deletar venda.")
    })
}
function atualizar_venda(id) {

    let campoCliente = document.getElementById("cliente").value;
    let campoData = document.getElementById("data_venda").value;
    let campoValortotal = document.getElementById("valor_total").value;
    let campoForma = document.getElementById("formade_pagamento").value;
    let campoStatus = document.getElementById("statu").value;

    const venda = {
        id_venda: id,
        cliente: {
            id_cliente: campoCliente
        },
        data_venda: campoData,
        valor_total: campoValortotal,
        formade_pagamento: campoForma,
        statu: campoStatus
    };

    console.log("Atualizando venda:", venda);
    console.log("ID:", id);

    fetch('http://localhost:3333/venda/' + id, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(venda)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro HTTP: " + response.status);
        }

        return response.json();
    })
    .then(data => {
        console.log("Venda atualizada:", data);

        alert("Venda atualizada com sucesso!");

        listar_venda();
        cadastroLimpar();
    })
    .catch(error => {
        console.error("Erro ao atualizar venda:", error);
        alert("Erro ao atualizar venda.");
    });
}


function  cadastroLimpar(){
    let campoId=document.getElementById("id_venda").value="";
    let campoCliente = document.getElementById("cliente").value="";
    let campoData = document.getElementById("data_venda").value="";
    let campoValortotal = document.getElementById("valor_total").value="";
    let campoForma = document.getElementById("formade_pagamento").value="";
    let campoStatus = document.getElementById("statu").value="";
    }    
window.onload = function() {
    listar_venda();}