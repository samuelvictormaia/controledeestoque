function carregarProdutos() {
  let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
  const tbody = document.querySelector('#tabelaProdutos tbody');
  tbody.innerHTML = '';

  produtos.forEach((produto, index) => {
    let tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${produto.nome}</td>
      <td>${produto.preco}</td>
      <td>${produto.quantidade}</td>
      <td>${produto.lote}</td>
      <td>${produto.fabricacao}</td>
      <td>${produto.validade}</td>
      <td>${produto.descricao}</td>
      <td>
        <button onclick="abrirModal(${index})">Editar</button>
        <button onclick="excluirProduto(${index})">Excluir</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function excluirProduto(index) {
  let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
  produtos.splice(index, 1);
  localStorage.setItem('produtos', JSON.stringify(produtos));
  carregarProdutos();
}

function abrirModal(index) {
  let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
  let produto = produtos[index];

  document.getElementById("editIndex").value = index;
  document.getElementById("editNome").value = produto.nome;
  document.getElementById("editPreco").value = produto.preco;
  document.getElementById("editQuantidade").value = produto.quantidade;
  document.getElementById("editLote").value = produto.lote;
  document.getElementById("editFabricacao").value = produto.fabricacao;
  document.getElementById("editValidade").value = produto.validade;
  document.getElementById("editDescricao").value = produto.descricao;

  document.getElementById("modal").style.display = "flex";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}


document.getElementById("formEditar").addEventListener("submit", function(e) {
  e.preventDefault();

  let index = document.getElementById("editIndex").value;
  let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

  produtos[index] = {
    nome: document.getElementById("editNome").value,
    preco: document.getElementById("editPreco").value,
    quantidade: document.getElementById("editQuantidade").value,
    lote: document.getElementById("editLote").value,
    fabricacao: document.getElementById("editFabricacao").value,
    validade: document.getElementById("editValidade").value,
    descricao: document.getElementById("editDescricao").value
  };

  localStorage.setItem('produtos', JSON.stringify(produtos));
  fecharModal();
  carregarProdutos();
});

carregarProdutos();
