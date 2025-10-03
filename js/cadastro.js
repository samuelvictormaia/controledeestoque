const form = document.getElementById('formCadastro');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Produto cadastrado com sucesso!");

    const nome = document.getElementById('nomeProduto').value;
    const preco = document.getElementById('precoProduto').value;
    const quantidade = document.getElementById('quantidade').value;
    const lote = document.getElementById('loteProduto').value;
    const fabricacao = document.getElementById('fabricacao').value;
    const validade = document.getElementById('validade').value;
    const descricao = document.getElementById('descricao').value;

    const produto = {nome, preco, quantidade, lote, fabricacao, validade, descricao};

    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    produtos.push(produto);
    localStorage.setItem('produtos', JSON.stringify(produtos));

    console.log("=== Produto Cadastrado ===");
    console.log("nome do produto:", nome);
    console.log("preço do produto:", preco);
    console.log("quantidade do produto:", quantidade);
    console.log("lote do produto:", lote);
    console.log("data de fabricação:", fabricacao);
    console.log("data de validade:", validade);
    console.log("descrição do produto:", descricao); 

  });