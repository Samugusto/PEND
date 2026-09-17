const buscar = document.querySelector("#buscarUsuarios");
const resultado = document.querySelector("#resultado");
const ID = document.querySelector("#idusuario");
/* Usando fetch catch e then */
/* buscar.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(resposta => resposta.json())
        .then(dados => {
            resultado.innerHTML = "";

            dados.forEach(usuario => {
                resultado.innerHTML += `
            <p>
            <strong>${usuario.name}</strong><br>
            </p>
            <hr>
            `;
            })
        })
        .catch(erro => {
            resultado.innerHTML += `
            <p>
            <strong>Erro!</strong><br>
            </p>
            <hr>
            `;
        })
}); */

/* Assíncrona */
/* buscar.addEventListener("click", async() => {
    try {
        const resposta = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const dados = await resposta.json();
        resultado.innerHTML = "";
        dados.forEach(usuario => {
            resultado.innerHTML += `
            <p>
            <strong>${usuario.name}</strong><br>
            ${usuario.email}
            </p>
            <hr>`;
        });
    } catch (erro) {
        resultado.innerHTML = "Erro ao buscar usuários.";
        console.log(erro);
    }
}); */

buscar.addEventListener("click", async () => {

    const id = idusuario.value;

    if (id === "") {
        resultado.innerHTML = "Digite um ID"
        return;
    }

    try {
        const resposta = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const dados = await resposta.json();
        resultado.innerHTML += `
        <p>
        <strong>${dados.name}</strong><br>
        Email: ${dados.email}<br>
        Cidade:${dados.address.city}<br>
        Telefone ${dados.phone}
        </p>
        <hr>
        `
    } catch (erro) {
        resultado.innerHTML = "Erro ao buscar usuários.";
        console.log(erro);
    }
});