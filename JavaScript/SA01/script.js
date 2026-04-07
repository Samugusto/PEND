//cadastrar
let cadastrar = document.querySelector("#cadastrar")
let mensagem = document.querySelector("#mensagem")

//senhas
let senhaconfirm = document.querySelector("#senhaconfirm")//confirmação de senha paragrafo
let senha2 = document.querySelector("#senha2")//senha de confirmação
let senha = document.querySelector("#password"); //senha em si input
let botaoSenha = document.querySelector("#botaoSenha"); //botão para ocultar a senha

//botão para verificar o campo do nome
let nome = document.querySelector("#nome");//input do nome
let nomeveri = document.querySelector("#nomeveri"); // texto abaixo do nome para aviso

//verificar email
let emaill = document.querySelector("#emailV");//input email
let regexEmail = /^[^\s@]+@[^\s@]+\.com$/; //verifica se o . começa antes do @ caso comece o email dá como inválido
let emailveri = document.querySelector("#emailveri");//paragrafo email

//telefone
let botaotele = document.querySelector("#botaotele0")//pequeno botão para adicionar o telefone
let lista = document.querySelector("#lista")//lista de inputs novos telefones
let telefone = document.querySelector("#telefone")//input do telefone
let televeri = document.querySelector("#televeri")//paragrafo verificador de telefone
let regexTelefone = /^(\(?\d{2}\)?\s?)(\d{4,5}\-?\d{4})$/;//regex do telefone

//icones para identificação de campo
//nome
let botao1 = document.querySelector("#icone3")//verificação nome correto
let botao2 = document.querySelector("#icone4")//verificação nome incorreto

//Email
let botao3 = document.querySelector("#icone5")//verificação email incorreto
let botao4 = document.querySelector("#icone6")//verificação email correto

//confirmar senha
let botao5 = document.querySelector("#icone7")//verificação confirmar senha incorreto
let botao6 = document.querySelector("#icone8")//verificação confirmar senha correto


//botão para ocultar e mostrar senha
botaoSenha.addEventListener("click", function () {
    if (senha.type === "password") {
        senha.setAttribute('type', 'text');
        botaoSenha.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');//troca de icone
    } else {
        senha.setAttribute('type', 'password');
        botaoSenha.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');//troca de icone
    }
});

//confirmar senha
senha2.addEventListener("keyup", function () {
    if (senha.value != senha2.value) {
        senhaconfirm.textContent = "senha incorreta!"
        senhaconfirm.style.color = "#ff0000"
        botao5.style.display = "block";
        botao6.style.display = "none";
        senha2.style.borderColor = "#ff0000"
    } if (senha.value == senha2.value) {
        senha2.style.borderColor="#09ff00";
        botao6.style.display = "block"
        botao5.style.display = "none"
        senhaconfirm.style.color = "#09ff00"
        senhaconfirm.textContent = "senha correta!"
    }
});


//barrinha de verificador de senha
function checkStrength() {
    let password = document.getElementById("password").value;//input de senha (valor)
    let progressBar = document.getElementById("progress-bar");//barra de progresso

    // Baseado apenas no comprimento da senha
    // 0-5 = fraca, 6 = média, 7+ = ótima
    let lengthPercent = Math.min(100, Math.round((password.length / 7) * 100));
    progressBar.style.width = lengthPercent + "%";

    if (password.length === 0) {
        progressBar.style.backgroundColor = "#ced4da"; // neutro
    } else if (password.length <= 5) {
        progressBar.style.backgroundColor = "#ff0019"; // fraca
    } else if (password.length === 6) {
        progressBar.style.backgroundColor = "#ffbf00"; // média
    } else if (password.length >= 6) {
        progressBar.style.backgroundColor = "#00df82"; // ótima
    }
}


//confirmador de campos obrigatórios
cadastrar.addEventListener("click", function () {
    //nome
    if (nome.value == "") {
        botao1.style.display = "block";
        botao2.style.display = "none";
        nome.style.borderColor = "#f50000";
        nomeveri.style.color = "#f50000";
        nomeveri.textContent = "Campo Vazio";
    } if (nome.value.length > 0) {
        botao2.style.display = "block";
        botao1.style.display = "none";
        nome.style.borderColor = "#00ff37f1"
        nomeveri.textContent = "­";
    }
    //email
    if (regexEmail.test(emaill.value)) {
        emaill.style.borderColor = "#09ff00";
        botao4.style.display = "block";
        botao3.style.display = "none";
        emailveri.textContent = "­";

    } else {
        emailveri.textContent = "Email inválido ou inexistente.";
        emailveri.style.color = "#ff0000";
        emaill.style.borderColor = "#ff0000";
        botao3.style.display = "block";
        botao4.style.display = "none";
    }
    //telefone
    if (regexTelefone.test(telefone.value)) {
        televeri.textContent = "telefone válido"
        televeri.style.color = "#09ff00"
        telefone.style.borderColor = "#09ff00";
    } else {
        televeri.textContent = "telefone inválido"
        televeri.style.color = "#ff0000"
        telefone.style.borderColor = "#ff0000";
    }
    //confirmação senha
    if (senha2.value == "") {
        senhaconfirm.textContent = "Campo vazio"
        senhaconfirm.style.color = "#ff0000"
        botao5.style.display = "block";
        senha2.style.borderColor = "#ff0000"
    }
    //cadastrar
    if (regexEmail.test(emaill.value) && nome.value.length > 0 && regexTelefone.test(telefone.value) && senha.value.length >= 6 && senha2.value == senha.value) {//verifica os campos para enviar mensagem de sucesso
        mensagem.textContent = "login efetuado com sucesso!"
        mensagem.style.color = "#09ff00"
    } else {
        mensagem.textContent = "Login inválido. Preencha os campos acima."
        mensagem.style.color = "#ff0000"
    }
});


//criação da lista do telefone
botaotele.addEventListener("click", function () {

    let novoTel = document.createElement("li")//criar lista
    let inputTel = document.createElement("input")//criar input
    let botaoRem = document.createElement("button")//criar botão

    inputTel.type = "text"//tipo de texto no input
    inputTel.placeholder = "(00) 00000-00000"//placeholder do input
    botaoRem.textContent = "X"//botão ao lado do input 

    novoTel.appendChild(inputTel);//input
    lista.appendChild(novoTel);//lista
    novoTel.append(botaoRem)//botão

    botaoRem.addEventListener("click", function () {
        let confirma = confirm("deseja remover este número?")//confirm para remover número da lista
        if (confirma === true) {
            lista.removeChild(novoTel)//remove
        } else if (confirma === false) {
            alert("telefone não removido")//cancela
        }
    })
});

//telefone/digitação para ficar bonito no input
const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value
}

