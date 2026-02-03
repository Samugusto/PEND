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
