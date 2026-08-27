const cereja = document.querySelector("#cereja");
const bolo = document.querySelector("#bolo");
const imagem = document.querySelector("#imgC");
const explosao = document.querySelector("#explosion");
const tempoExplosao = 700;

//event = objeto fornecido pelo navegador que tem informações sobre o evento que aconteceu
//dataTransfer = objeto para armazenar e transportar dados durante a operação de arrastar e soltar
cereja.addEventListener ("dragstart", function (event) {
    event.dataTransfer.setData("text", event.currentTarget.id)
});

//mudar o padrão
bolo.addEventListener("dragover", function (event) {
    event.preventDefault();
    console.log("Pode soltar aqui no bolo...");
});

//soltar
bolo.addEventListener("drop", function (event) {
    event.preventDefault();
    imgC.style.opacity = "1";
    explosao.style.opacity = "1";
    explosao.style.display = "block";

    setTimeout(function () {
        explosao.style.display = "none";
    }, tempoExplosao);

    const id = event.dataTransfer.getData("text");
    const elemento = document.querySelector("#" + id);

    //a div do cereja passa a ser filho da div bolo.
    bolo.appendChild(elemento);
});