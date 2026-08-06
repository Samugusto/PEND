//classe 
class Carro {

    constructor(marca, modelo, ano, cor) {
        //this significa "ESTE OBJETO"
        //atributos
        //a marca deste carro recebe o valor informado
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }

    ligar() {
        console.log("Carro ligado");
    }

    acelerar() {
        console.log("Acelerando");
    }
    frear(){
        console.log(`${this.modelo} freiou.`)
    }
}

const carro1 = new Carro("Volkswagen", "Gol", 2022, "Branco");
console.log("Carro 1: ", carro1);

const carro2 = new Carro("Toyota", "Corolla", 2025, "Preto");
console.log("Carro 2: ", carro2);

const carro3 = new Carro("BMW", "BMW X1", 2022, "Branco");
console.log("Carro 3: ", carro3);

const carro4 = new Carro("Porsche", "Porsche Macan", 2021, "Azul");
console.log("Carro 4: ", carro4);

console.log("-------------------------");
console.log("Atributos do Carro 1: ");
console.log("- ", carro1.marca);
console.log("- ", carro1.modelo);
console.log("- ", carro1.ano);
console.log("- ", carro1.cor);
console.log("-------------------------");

console.log("Atributos do Carro 2: ");
console.log("- ", carro2.marca);
console.log("- ", carro2.modelo);
console.log("- ", carro2.ano);
console.log("- ", carro2.cor);
console.log("-------------------------");

console.log("Atributos do Carro 3: ");
console.log("- ", carro3.marca);
console.log("- ", carro3.modelo);
console.log("- ", carro3.ano);
console.log("- ", carro3.cor);
console.log("-------------------------");

console.log("Atributos do Carro 4: ");
console.log("- ", carro4.marca);
console.log("- ", carro4.modelo);
console.log("- ", carro4.ano);
console.log("- ", carro4.cor);
console.log("-------------------------");

carro1.ligar();
carro1.acelerar();