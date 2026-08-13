
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
    }

    exibir() {
        const resultado = document.querySelector("#resultado");
        resultado.innerHTML = "";
        this.Produtos.forEach(produto => {
            resultado.innerHTML += `
        <div>
            <p>Nome: ${produto.nome}</p>
            <p>Preço: ${produto.aplicarDesconto()}</p>
            <p>Categoria: ${produto.categoria}</p>
            <p>Desconto: ${produto.desconto}</p>
        </div>
        `;
        });

    }
}
const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const categoria = document.querySelector("#categoria");
const desconto = document.querySelector("#desconto");
const botao = document.querySelector("#botaoCadastrar");
botao.addEventListener("click", function () {
    const produto = new Produto(nome.value, preco.value, categoria.value, desconto.value);
    loja.adicionarProduto(produto);
    produto.aplicarDesconto();
    loja.exibir();
});
const loja = new Loja()