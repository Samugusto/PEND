//atividade1
let buttn = document.querySelector("#buttn");
buttn.addEventListener("click", function () {
    titulo.style.color = "#0008f5";
});

let butto = document.querySelector("#butto");
butto.addEventListener("click", function () {
    titulo.style.color = "#f50000";
});
//atividade2
let but = document.querySelector("#but");
but.addEventListener("click", function () {
    document.getElementById("titul").classList.toggle("oculto");
});

//atividade3
let input = document.querySelector("#texto");
let results = document.querySelector("#results");
input.addEventListener("keyup", function () {
    results.textContent = input.value.length;
});
//atividade4
let clicks = document.querySelector("#clicks");
let cli = document.querySelector("#cli");
let contador = 0;
clicks.addEventListener("click", function () {
    contador++;
    cli.textContent = contador;
});
//atividade5/6
let enviar = document.querySelector("#enviar");
let inputtest = document.querySelector("#test");

enviar.addEventListener("click", function () {
    let novoitem2 = document.createElement("li");
    novoitem2.textContent = inputtest.value;

    novoitem2.addEventListener("click", function () {
        //extra
        let promptresult = prompt("você tem certeza que quer exclui-lo? (s=sim n=não)")
        if (promptresult == "s") {
            alert("item excluido")
            this.remove();
        } if (promptresult == "n") {
            alert("item não excluido")
        }
    }
    );

    document.getElementById("lista").appendChild(novoitem2);
    inputtest.value = "";
});
//atividade hard
let env = document.querySelector("#env");
let inputnome = document.querySelector("#nome");
let mensagem = document.querySelector("#mensagem");
env.addEventListener("click", function () {
    if (inputnome.value == "") {
        mensagem.style.color = "#f50000";
        mensagem.textContent = "O campo está vazio!"
    } else {
        mensagem.style.color = "#00ff37f1"
        mensagem.textContent = "Seu nome foi enviado com sucesso!"
    }
});
//atividade 7
let ref = document.querySelector("#ref");//botao
let inputval = document.querySelector("#val");//input
let parag = document.querySelector("#parag");//paragrafo

ref.addEventListener("click", function () {

    let email = inputval.value;

    let regexEmail = /^[^\s@]+@[^\s@]+\.com$/; //verifica se o . começa antes do @ caso comece o email dá como inválido

    if (regexEmail.test(email)) {
        parag.textContent = "Email válido!";
        parag.style.color = "#09ff00"
    } else {
        parag.textContent = "Email inválido!";
        parag.style.color = "#ff0000"
    }

});
//atividade 8
let inputsenha = document.querySelector("#senha");
let resr = document.querySelector("#resr");
let rsr = document.querySelector("#rsr")
inputsenha.addEventListener("keyup", function () {
    resr.textContent = inputsenha.value.length
    if (inputsenha.value.length == 6) {
        rsr.style.color = "#ffbf00"
        rsr.textContent = "sua senha é de segurança média :/"
    } else if (inputsenha.value.length > 6) {
        rsr.style.color = "#11ff00"
        rsr.textContent = "Sua senha é de segurança avançada ;)"
    } else if (inputsenha.value.length < 6) {
        rsr.style.color = "#ff0000"
        rsr.textContent = "Sua senha está bem fraca ;( "
    }
});
//atividade extra extra
let senhav = document.querySelector("#senhav");
let botaoSenha = document.querySelector("#botaoSenha");
botaoSenha.addEventListener("click", function(){
    if (senhav.type === "password") {
        senhav.setAttribute('type', 'text');
        botaoSenha.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    }else{
        senhav.setAttribute('type', 'password');
        botaoSenha.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
    }
});

let senhavalidar = document.querySelector("#senhav");
let validon = document.querySelector("#validon")
let vv = document.querySelector("#vv");//botao
let inputemailV = document.querySelector("#emailV");//input
let RFE = document.querySelector("#RFE");//paragrafo
let loginice = document.querySelector("#loginice")

vv.addEventListener("click", function () {
    if (senhavalidar.value.length == 6) {
        validon.style.color = "#ffbf00"
        validon.textContent = "sua senha é de média segurança"
    } else if (senhavalidar.value.length > 6) {
        validon.style.color = "#11ff00"
        validon.textContent = "Sua senha é de segurança avançada"
    } else if (senhavalidar.value.length < 6) {
        validon.style.color = "#ff0000"
        validon.textContent = "Sua senha é fraca ;("
    }
    let email = inputemailV.value;
    let regexEmail = /^[^\s@]+@[^\s@]+\.com$/; //verifica se o . começa antes do @ caso comece o email dá como inválido
    if (regexEmail.test(email)) {
        RFE.textContent = "Email válido!";
        RFE.style.color = "#09ff00"
    } else {
        RFE.textContent = "Email inválido ou inexistente. verique se colocou o '@' e o '.'(coloque o '.' depois do '@'))";
        RFE.style.color = "#ff0000"
    }
    if (regexEmail.test(email) && senhavalidar.value.length >= 6){
        loginice.style.color = "#09ff00"
        loginice.textContent = "login efetuado com sucesso!"
    }else{
        loginice.style.color = "#ff0000"
        loginice.textContent = "Login inválido! Veja os erros acima!"
    }
});
