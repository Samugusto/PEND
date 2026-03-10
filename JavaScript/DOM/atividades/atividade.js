//atividade1
let buttn = document.querySelector("#buttn");
buttn.addEventListener("click", function(){
    titulo.style.color = "#0008f5";});

let butto = document.querySelector("#butto");
butto.addEventListener("click", function(){
    titulo.style.color = "#f50000";});
//atividade2
let but = document.querySelector("#but");
but.addEventListener("click", function(){
document.getElementById("titul").classList.toggle("oculto");
});

//atividade3
let input = document.querySelector("#texto");
let results = document.querySelector("#results");
input.addEventListener("keyup", function(){
    results.textContent = input.value.length;
});
//atividade4
let clicks = document.querySelector("#clicks");
let cli = document.querySelector("#cli");
let contador = 0;
clicks.addEventListener("click", function(){
    contador++;
    cli.textContent = contador;
});
//atividade5/6
let enviar = document.querySelector("#enviar");
let inputtest = document.querySelector("#test");

enviar.addEventListener("click", function(){
    let novoitem2 = document.createElement("li");
    novoitem2.textContent = inputtest.value;
    
    novoitem2.addEventListener("click", function() {
        //extra
        let promptresult = prompt("você tem certeza que quer exclui-lo? (s=sim n=não)")
        if (promptresult == "s"){
            alert("item excluido")
        this.remove(); }if (promptresult == "n"){
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
env.addEventListener("click", function(){
if (inputnome.value == ""){
    mensagem.style.color="#f50000";
    mensagem.textContent="O campo está vazio!"
}else{
    mensagem.style.color= "#00ff37f1"
    mensagem.textContent="Seu nome foi enviado com sucesso!"
}
});
//atividade 7
let ref = document.querySelector("#ref");
let inputval = document.querySelector("#val");
let parag = document.querySelector("#parag");
ref.addEventListener("click", function(){
    let email = inputval.value
    if (email.includes(".") && !email.includes("@")){
    parag.textContent="Falta o '@' no Email!"}
    else if (email.includes("@") && !email.includes(".")){
        parag.textContent="Falta o '.' no Email!"
    }else if (!email.includes("@") && !email.includes(".")){
        parag.textContent= "Email Inválido!"
    }else{
        parag.textContent="Email válido!"
    }
});
//atividade 8
let inputsenha = document.querySelector("#senha");
let resr = document.querySelector("#resr");
let rsr = document.querySelector("#rsr")
inputsenha.addEventListener("keyup", function(){
    resr.textContent = inputsenha.value.length;
    if (inputsenha.value.length == 6){
        rsr.textContent = "sua senha é de segurança média :/"
    } else if (inputsenha.value.length > 6){
        rsr.textContent = "Sua senha é de segurança avançada ;)"
    }else if (inputsenha.value.length < 6){
        rsr.textContent = "Sua senha está bem fraca ;( "
    }
});
