function saudacao() {
    console.log("Olá Javascript!");
}
saudacao();

function nomeDaFuncao(parametros){
    return resultado;
}

//exemplo
function somar(a, b){
    return a + b;
}
console.log(somar(5, 3));

function saudacaoNome(nome) {
    console.log("Olá, " + nome);
}

saudacaoNome("Ana");

//atividade 1
function imc(peso, altura){
    return peso / altura ** 2;
}
console.log(imc(70, 1.75))

//atividade2
function parimpar(e){
if (e %2 == 0){
    console.log("é par")
}else{
    console.log("é impar")
};
}
parimpar(7);

console.log("************************************************ FUNÇÕES NATIVAS ************************************************");
let agora = new Date();
console.log(agora);

function mostrarDataHora() {
    let data = new Date();

    console.log("Dia:", data.getDate());
    console.log("Mês:", data.getMonth()+1);
    console.log("Ano:", data.getFullYear());
    console.log("Hora:", data.getHours());
    console.log("Minutos:", data.getMinutes());
}
mostrarDataHora();

function arrumado(){
    let data = new Date();

    console.log("horas minutos e segundos:", data.getHours()+ ':' +data.getMinutes()+':' + data.getSeconds(), "dias mês ano:", data.getDate()+ '/' +(data.getMonth()+1) + '/'+ data.getFullYear()); //ao utilizar o (+) ele "soma" strings tornando 12'/'03 para 12/03
}
arrumado();

//operadores matemáticos

console.log(Math.PI);
function calcularOperacoes(numero){
console.log("Raiz:", Math.sqrt(numero));
console.log("Arredondado:", Math.round(numero));
console.log("Para cima:", Math.ceil(numero));
console.log("Para baixo:", Math.floor(numero));
console.log("Ao Quadrado:", Math.pow(numero, 2));
console.log("Valor absoluto:", Math.abs(numero));
}
calcularOperacoes(7.8);

//strings
function analisarTexto(texto) {
    console.log("Tamanho:", texto.length);
    console.log("Maiúsculo:", texto.toUpperCase());
    console.log("Minúsculo:", texto.toLowerCase());
}
analisarTexto("Javascript")

function verificarsetalfrasetem(frase){
    console.log(frase.includes("Javascript"));
}
verificarsetalfrasetem("Eu <3 Javascript");

function colocadeformaajeitada(nome, curso){
    return "Aluno: " + nome + " | Curso: " + curso;
}
console.log(colocadeformaajeitada("José", "Front-end"))
