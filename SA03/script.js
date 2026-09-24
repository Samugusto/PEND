async function consultarAPI() {
    const url = 'https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1';
    const apiKey = 'live_BF6KnW9Ripun2Sb6DpiEzb1ZvJEljl7gzahmZZbB5zhqhy4dyzs88fzaXabuZWcy';

    try {
        const resposta = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });

        if (!resposta.ok) {
            throw new Error(`Erro na requisição: ${resposta.status}`);
        }

        const dados = await resposta.json();
        const imagemGato = document.querySelector('#imagemGato');
        const mensagem = document.querySelector('#mensagem');

        imagemGato.src = dados[0].url;
        imagemGato.width = dados[0].width;
        imagemGato.height = dados[0].height;
        mensagem.textContent = '';
    } catch (erro) {
        console.error('Erro ao buscar dados:', erro);
        document.querySelector('#mensagem').textContent =
            'Não foi possível carregar a imagem.';
    }
}

consultarAPI();
const produto = document.querySelector("#gato");
const carrinho = document.querySelector("#favorito");
produto.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text", event.currentTarget.id);
});

carrinho.addEventListener("dragover", function (event) {
    event.preventDefault();
});

carrinho.addEventListener("drop", function (event) {
    event.preventDefault();

    const id = event.dataTransfer.getData("text");
    if (id !== "gato") {
        return;
    }

    const copia = produto.cloneNode(true);
    copia.id = `gato-favorito-${Date.now()}`;
    copia.draggable = false;
    carrinho.appendChild(copia);

    consultarAPI();
});

const zonaDrop = document.getElementById('favorito');
let dragCounter = 0;

zonaDrop.addEventListener('dragover', (e) => {
    e.preventDefault();
});

zonaDrop.addEventListener('dragenter', (e) => {
    e.preventDefault();
    dragCounter++;
    zonaDrop.classList.add('over');
});

zonaDrop.addEventListener('dragleave', () => {
    dragCounter--;
    if (dragCounter === 0) {
        zonaDrop.classList.remove('over');
    }
});

zonaDrop.addEventListener('drop', (e) => {
    e.preventDefault();
    dragCounter = 0;
    zonaDrop.classList.remove('over');
});

button = document.querySelector("#refresh");
button.addEventListener("click", function () {
    consultarAPI();
})