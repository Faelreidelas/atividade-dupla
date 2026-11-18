let textoprogresso = document.querySelector("#texto-progresso")
let barrapreenchimento = document.querySelector("#barra-preenchimento")
let btnenergia = document.querySelector("#btn-energia")
let statusenergia = document.querySelector("#status-energia")

btnenergia.addEventListener('click', function(){
     barrapreenchimento.style.width = "100%"
     textoprogresso.textContent = "100%"
     statusenergia.textContent = "O sistema está operando em energia plena."

})

const areaRastreio = document.getElementById("area-rastreio");
let coordx = document.getElementById("coord-x");
let coordy = document.getElementById("coord-y");

areaRastreio.addEventListener( 'mousemove', (event) => {
    coordx.textContent = event.offsetX;
    coordy.textContent = event.offsetY;
})




const imgEscudo = document.querySelector("#img-escudo");
const botoesAlerta = document.querySelectorAll(".btn-alerta");

botoesAlerta.forEach(botao => {
    botao.addEventListener("click", () => {
        const cor = botao.dataset.cor;
        const status = botao.dataset.status;

        imgEscudo.src =
            `https://placehold.co/150x150/${cor}/white?text=${encodeURIComponent(status)}`;
    });
}); 

/*
4
*/
const nomeVerificacao = document.getElementById("input-verificacao")
const btnAddVerificacao = document.getElementById("btn-add-verificacao")
const listaVerificacoes = document.getElementById("lista-verificacoes")

btnAddVerificacao.addEventListener('click', () => {
    const texto = nomeVerificacao.value.trim()

    if (texto === "") return

    const novaVerificacao = document.createElement("li")

    const textoVerificacao = document.createElement("span")
    textoVerificacao.textContent = texto

    const btncompletar = document.createElement("button")
    btncompletar.textContent = "completar tarefa"
    btncompletar.type = "button"

    btncompletar.addEventListener('click', () => {
        novaVerificacao.style.backgroundColor = "lightgreen"
        btncompletar.remove()
    })

    novaVerificacao.appendChild(textoVerificacao)
    novaVerificacao.appendChild(btncompletar)
    listaVerificacoes.appendChild(novaVerificacao)

    nomeVerificacao.value = ""
})

/*
5
*/
const inputMensagem = document.getElementById("input-mensagem")
const visorTransmissao = document.getElementById("visor-transmissao")
const btnTransmitir = document.getElementById("btn-transmitir")

function transmitirMensagem() {
    const mensagem = inputMensagem.value.trim()

    if (mensagem === "") {
        visorTransmissao.textContent = "Aguardando sinal..."
        return
    }

    visorTransmissao.textContent = mensagem
    inputMensagem.value = ""
}

btnTransmitir.addEventListener("click", transmitirMensagem)

inputMensagem.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter") {
        transmitirMensagem()
    }
})





