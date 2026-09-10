long = document.querySelector("#long");
lati = document.querySelector("#lati");
prec = document.querySelector("#prec");
const botao = document.querySelector("#botao");
const foto = document.querySelector("#Foto");
const video = document.querySelector("#camera");
const canvas = document.querySelector("#canvas");
navigator.geolocation.getCurrentPosition(
    function (posicao) {
        lati.textContent = `Latitude: ${posicao.coords.latitude}`;
        long.textContent = `Longitude: ${posicao.coords.longitude}`;
        prec.textContent = `Longitude: ${posicao.coords.accuracy}`;
        console.log("Latitude:", posicao.coords.latitude);
        console.log("Longitude:", posicao.coords.longitude);
        console.log("Precisão:", posicao.coords.accuracy);
    },
    function (erro) {
        console.log("Não foi possível obter a localização", erro);
    }
)
navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false
})
    .then(function (stream) {
        const video = document.querySelector("#camera")
        video.srcObject = stream;
    })
    .catch(function (erro) {
        console.log("Erro ao acessar a câmera")
    });
botao.addEventListener("click", function () {
    canvas.width = video.clientWidth;
    canvas.height = video.clientHeight;

    const contexto = canvas.getContext("2d");

    contexto.drawImage(
        video, 0, 0, canvas.width, canvas.height
    );

    foto.src = canvas.toDataURL("image/png");
});