document.getElementById("conteudo").innerHTML = "<p>Olá, mundo DOM! (innerHTML) </p>";
document.getElementById("mensagem").textContent = "Texto simples, sem HTML. (textcontent)";
document.getElementById("foto").setAttribute("src", "https://media1.tenor.com/m/W3vOY-as3jsAAAAC/doctor-pigeon-pigeon.gif");
let url = document.getElementById("link").getAttribute("href");
console.log(url);
document.getElementById("caixa").style.backgroundColor = "lightblue";
document.getElementById("alerta").classList.add("destaque");