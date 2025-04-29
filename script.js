function aumentarFonte() {
    document.querySelectorAll("*").forEach(function (el) {
        const tamanhoAtual = parseFloat(getComputedStyle(el).fontSize);
        el.style.fontSize = tamanhoAtual + 5 + "px"
    });
}

function diminuirFonte() {
    document.querySelectorAll("*").forEach(function (el) {
        const TamanhoAtual = parseFloat(getComputedStyle(el).fontSize);
        el.style.fontSize = TamanhoAtual - 5 + "px"
    });
}

const botaoContraste = document.getElementById('botao-contraste');
const corpo = document.body;

function alternarContraste() {
    corpo.classList.toggle('modo-alto-contraste');


if (corpo.classList.contains('modo-alto-contraste')) {
        localStorage.setItem('modoContraste', 'ativado');
} else {
        localStorage.setItem('modoContraste', 'desativado');
}}

if (localStorage.getItem('modoContraste') === 'ativado') {
    corpo.classList.add('modo-alto-contraste');
}
botaoContraste.addEventListener('click', alternarContraste);



