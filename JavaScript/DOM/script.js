let botao = document.getElementById("botao");
botao.addEventListener("click", function(){
    alert("Olá, DOM!");
});
let titulo = document.querySelector("#titulo");
botao.addEventListener("click", function(){
    titulo.style.color = "#00F5B3";
    titulo.style.fontSize = "32px";
titulo.textContent = "Texto alterado pelo Javascript"});
