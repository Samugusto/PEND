document.getElementById("conteudo").innerHTML = "<p>Olá, mundo DOM! (innerHTML) </p>";

document.getElementById("mensagem").textContent = "Texto simples, sem HTML. (textcontent)";

document.getElementById("foto").setAttribute("src", "https://media1.tenor.com/m/W3vOY-as3jsAAAAC/doctor-pigeon-pigeon.gif");

let url = document.getElementById("link").getAttribute("href");
console.log(url);

document.getElementById("caixa").style.backgroundColor = "lightblue";

document.getElementById("alerta").classList.add("destaque");

document.getElementById("alert").classList.remove("oculto");

let novoParagrafo = document.createElement("p");
novoParagrafo.textContent = "Esse elemento foi criado pelo Javascript.";
document.getElementById("container").appendChild(novoParagrafo);

let novoItem = document.createElement("li");
novoItem.textContent = "Item novo";
document.getElementById("lista").appendChild(novoItem);

let item = document.getElementById("item1");
document.getElementById("list").removeChild(item);