long = document.querySelector("#long");
lati = document.querySelector("#lati");
prec = document.querySelector("#prec");
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
    audio: true
})
.then(function(stream){
    const video = document.querySelector("#camera")
    video.srcObject = stream;
})
.catch(function(erro){
    console.log("Erro ao acessar a câmera")
})