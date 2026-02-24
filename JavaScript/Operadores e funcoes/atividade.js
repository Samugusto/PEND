mostrarDataHora();

function arrumado(){
    let data = new Date();

    console.log("horas e minutos:", data.getHours()+ ':' +data.getMinutes())
}
arrumado();

let num1 = prompt("Digite o primeiro número:");
let num2 = prompt("Digite o segundo:");
let soma = Number(num1) + Number(num2);
alert("a soma é " + soma);
console.log("a soma deu " +soma);
let media = soma / 2
alert("a media é: " +media);
console.log("a média deu "+media);

let nome = prompt("digite seu nome: ");
function analisarTexto(texto) {
    console.log("Tamanho:", texto.length);
    console.log("Maiúsculo:", texto.toUpperCase());
}
analisarTexto(nome);

let frase = prompt("digite uma frase aleatoria: ")
function verificarsetalfrasetem(frase){
    console.log(frase.includes("HTML"));
}
verificarsetalfrasetem(frase);

