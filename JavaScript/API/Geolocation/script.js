icon = document.querySelector("#icon")
navigator.geolocation.getCurrentPosition(
    function (posicao) {
        icon.innerHTML = '<i class="bi bi-geo-alt-fill"></i>';
        icon.style.color = "green"
        console.log("Latitude:", posicao.coords.latitude);
        console.log("Longitude:", posicao.coords.longitude);
        console.log("Precisão:", posicao.coords.accuracy);
    },
    function (erro) {
        icon.innerHTML = '<i class="bi bi-ban"></i>';
        icon.style.color = "red"
        console.log("Não foi possível obter a localização", erro);
    }
)