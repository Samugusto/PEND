//botão para ocultar e mostrar senha
let senha = document.querySelector("#senha"); //senha em si input
let botaoSenha = document.querySelector("#botaoSenha"); //botão para ocultar a senha
botaoSenha.addEventListener("click", function(){
    if (senha.type === "password") {
        senha.setAttribute('type', 'text');
        botaoSenha.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');//troca de icone
    }else{
        senha.setAttribute('type', 'password');
        botaoSenha.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');//troca de icone
    }
});

//botão para verificar o campo do nome
let cadastrar = document.querySelector("#cadastrar");//botão para o cadastro total
let nome = document.querySelector("#nome");//input do nome
let nomeveri = document.querySelector("#nomeveri"); // texto abaixo do nome para aviso
    cadastrar.addEventListener("click", function () {
    if (nome.value == "") {
        nomeveri.style.color = "#f50000";
        nomeveri.textContent = "O campo está vazio!"
    } else {
        nomeveri.style.color = "#00ff37f1"
        nomeveri.textContent = "Seu nome foi enviado com sucesso!"
    }
});
let senhav = document.querySelector("#senha");
let senhaveri = document.querySelector("#senhaveri")
let email = document.querySelector("#email");//input email
let emailveri = document.querySelector("#emailveri");//paragrafo email
let mensagem = document.querySelector("#mensagem")//mensagem no final do login
let senhaconfirm = document.querySelector("#senhaconfirm")//confirmação de senha paragrafo
let senha2 = document.querySelector("senha2")//senha de confirmação

cadastrar.addEventListener("click", function () {
    if (senhav.value.length == 6) {
        senhaveri.style.color = "#ffbf00"
        senhaveri.textContent = "sua senha é de média segurança"
    } else if (senhav.value.length > 6) {
        senhaveri.style.color = "#11ff00"
        senhaveri.textContent = "Sua senha é de segurança avançada"
    } else if (senhav.value.length < 6) {
        senhaveri.style.color = "#ff0000"
        senhaveri.textContent = "Sua senha é fraca ;("
    }
    if (senhav.value !== senha2.value){
        senhaconfirm.textContent = "senha incorreta!"
        senhaconfirm.style.color = "#ff0000"
    }else{
        senhaconfirm.style.color = "#09ff00"
        senhaconfirm.textContent = "senha correta!"
    }
    let email = emailV.value;
    let regexEmail = /^[^\s@]+@[^\s@]+\.com$/; //verifica se o . começa antes do @ caso comece o email dá como inválido
    if (regexEmail.test(email)) {
        emailveri.textContent = "Email válido!";
        emailveri.style.color = "#09ff00"
    } else {
        emailveri.textContent = "Email inválido ou inexistente. verique se colocou o '@' e o '.'(coloque o '.' depois do '@'))";
        emailveri.style.color = "#ff0000"
    }
    if (regexEmail.test(email) && senhavalidar.value.length >= 6){
        mensagem.style.color = "#09ff00"
        mensagem.textContent = "login efetuado com sucesso!"
    }else{
        mensagem.style.color = "#ff0000"
        mensagem.textContent = "Login inválido! Veja os erros acima!"
    }
});