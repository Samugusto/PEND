class produtos {
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }
    vender() {
        console.log(`${this.nome} foi vendido.`)
    }
    repor() {
        console.log(`${this.nome} foi reposto. Quantidade atual: ${this.estoque}`)
    }
    alterarPreco() {
        console.log(`${this.nome} teve seu preco alterado para ${this.preco} reais`)
    }
}
const produtos1 = new produtos("Arroz", 24.00, "300 unidades")
const produtos2 = new produtos("Maça", 6.00, "200 unidades")
const produtos3 = new produtos("Almerão", 5.00, "198 unidades")

console.log("-------------------------");
console.log("Atributos do produto 1: ");
console.log("- Nome", produtos1.nome);
console.log("- Preço", produtos1.preco);
console.log("- Estoque", produtos1.estoque);
console.log("-------------------------");
console.log("Atributos do produto 2: ");
console.log("- Nome", produtos2.nome);
console.log("- Preço", produtos2.preco);
console.log("- Estoque", produtos2.estoque);
console.log("-------------------------");
console.log("Atributos do produto 2: ");
console.log("- Nome", produtos3.nome);
console.log("- Preço", produtos3.preco);
console.log("- Estoque", produtos3.estoque);
console.log("-------------------------");

produtos1.repor();
produtos2.alterarPreco();
produtos3.vender();