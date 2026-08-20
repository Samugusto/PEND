
class Produto {
    constructor(nome, preco, categoria, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;
    }
    aplicarDesconto() {
        const precoDesconto = this.preco - (this.preco * this.desconto / 100);
        return precoDesconto;
    }
}
class Loja {
    constructor() {
        this.Produtos = [];
    }

    adicionarProduto(produto) {
        this.Produtos.push(produto);
        localStorage.setItem("Produtos", JSON.stringify(this.Produtos));
    }

    exibir() {
        const resultado = document.querySelector("#resultado");
        resultado.innerHTML = "";
        this.Produtos.forEach((produto, posicao) => {
            resultado.innerHTML += `
        <div>
            <p>Nome: ${produto.nome}</p>
            <p>Preço: ${produto.aplicarDesconto()}</p>
            <p>Categoria: ${produto.categoria}</p>
            <p>Desconto: ${produto.desconto}%</p>
            <button onclick="loja.excluir(${posicao})">Excluir</button>
        </div>
        `;
        });

    }
    excluir(posicao) {
        this.Produtos.splice(posicao, 1);
        localStorage.setItem("Produtos", JSON.stringify(this.Produtos));
        this.exibir()
    }
}
const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const categoria = document.querySelector("#categoria");
const desconto = document.querySelector("#desconto");
const botao = document.querySelector("#botaoCadastrar");
botao.addEventListener("click", function () {
    const produto = new Produto(nome.value, preco.value, categoria.value, desconto.value);
    loja.adi    cionarProduto(produto);
    produto.aplicarDesconto();
    loja.exibir();
});
const loja = new Loja()

const dados = localStorage.getItem("Produtos");

if (dados) {    
    const produtosSalvos = JSON.parse(dados);

    produtosSalvos.forEach((produtoSalvo) => {
        const produto = new Produto(
            produtoSalvo.nome,
            produtoSalvo.preco,
            produtoSalvo.categoria,
            produtoSalvo.desconto,
        );
        loja.adicionarProduto(produto);
    });
    loja.exibir();
}
