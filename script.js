// =========================
// PORTAL INCLUSIVO
// script.js
// =========================

// Tamanho inicial da fonte
let tamanhoFonte = 18;

// Controle da leitura
let sintetizador = window.speechSynthesis;
let falaAtual = null;

// =========================
// AUMENTAR FONTE
// =========================
function aumentarFonte() {

    if (tamanhoFonte < 34) {

        tamanhoFonte += 2;

        document.body.style.fontSize = tamanhoFonte + "px";

    }

}

// =========================
// DIMINUIR FONTE
// =========================
function diminuirFonte() {

    if (tamanhoFonte > 14) {

        tamanhoFonte -= 2;

        document.body.style.fontSize = tamanhoFonte + "px";

    }

}

// =========================
// ALTO CONTRASTE
// =========================
function altoContraste() {

    document.body.classList.toggle("altoContraste");

}

// =========================
// LER PÁGINA
// =========================
function lerPagina() {

    // Para qualquer leitura anterior
    sintetizador.cancel();

    // Lê somente o conteúdo principal
    let texto = document.querySelector("main").innerText;

    falaAtual = new SpeechSynthesisUtterance(texto);

    falaAtual.lang = "pt-BR";
    falaAtual.rate = 1;
    falaAtual.pitch = 1;
    falaAtual.volume = 1;

    sintetizador.speak(falaAtual);

}

// =========================
// PARAR LEITURA
// =========================
function pararLeitura() {

    sintetizador.cancel();

}

// =========================
// FECHAR MENU APÓS CLICAR
// (CELULAR)
// =========================

const links = document.querySelectorAll(".nav-link");

links.forEach(link => {

    link.addEventListener("click", () => {

        let menu = document.getElementById("menuPrincipal");

        if (menu.classList.contains("show")) {

            new bootstrap.Collapse(menu).toggle();

        }

    });

});

// =========================
// MENSAGEM DE BOAS-VINDAS
// =========================

window.onload = function () {

    console.log("Portal Inclusivo carregado com sucesso.");

};

// =========================
// ATALHOS DO TECLADO
// =========================

document.addEventListener("keydown", function (e) {

    // ALT + +
    if (e.altKey && e.key === "+") {

        aumentarFonte();

    }

    // ALT + -
    if (e.altKey && e.key === "-") {

        diminuirFonte();

    }

    // ALT + C
    if (e.altKey && (e.key === "c" || e.key === "C")) {

        altoContraste();

    }

    // ALT + L
    if (e.altKey && (e.key === "l" || e.key === "L")) {

        lerPagina();

    }

    // ESC
    if (e.key === "Escape") {

        pararLeitura();

    }

});