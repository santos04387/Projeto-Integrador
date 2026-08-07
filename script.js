// ========================================
// PORTAL INCLUSIVO
// script.js
// ========================================

"use strict";

// -------------------------------
// TAMANHO DA FONTE
// -------------------------------

let tamanhoFonte = 18;

// -------------------------------
// LEITOR DE TELA
// -------------------------------

const sintetizador = window.speechSynthesis;
let falaAtual = null;

// -------------------------------
// AUMENTAR FONTE
// -------------------------------

function aumentarFonte() {

    if (tamanhoFonte < 34) {

        tamanhoFonte += 2;
        document.body.style.fontSize = tamanhoFonte + "px";

    }

}

// -------------------------------
// DIMINUIR FONTE
// -------------------------------

function diminuirFonte() {

    if (tamanhoFonte > 14) {

        tamanhoFonte -= 2;
        document.body.style.fontSize = tamanhoFonte + "px";

    }

}

// -------------------------------
// ALTO CONTRASTE
// -------------------------------

function altoContraste() {

    document.body.classList.toggle("altoContraste");

}

// -------------------------------
// LER PÁGINA
// -------------------------------

function lerPagina() {

    sintetizador.cancel();

    const conteudo = document.querySelector("main");

    if (!conteudo) return;

    const texto = conteudo.innerText;

    falaAtual = new SpeechSynthesisUtterance(texto);

    falaAtual.lang = "pt-BR";
    falaAtual.rate = 1;
    falaAtual.pitch = 1;
    falaAtual.volume = 1;

    sintetizador.speak(falaAtual);

}

// -------------------------------
// PARAR LEITURA
// -------------------------------

function pararLeitura() {

    sintetizador.cancel();

}
// ========================================
// FECHAR MENU AO CLICAR (CELULAR)
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    const links = document.querySelectorAll(".nav-link");
    const menu = document.getElementById("menuPrincipal");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            if (menu && menu.classList.contains("show")) {

                const bsCollapse = bootstrap.Collapse.getInstance(menu)
                    || new bootstrap.Collapse(menu, {
                        toggle: false
                    });

                bsCollapse.hide();

            }

        });

    });

});

// ========================================
// MENSAGEM DE BOAS-VINDAS
// ========================================

window.addEventListener("load", function () {

    console.log("Portal Inclusivo carregado com sucesso.");

});

// ========================================
// ATALHOS DO TECLADO
// ========================================

document.addEventListener("keydown", function (e) {

    // ALT + =
    // (em muitos teclados o "+" é ALT + =)

    if (e.altKey && (e.key === "+" || e.key === "=")) {

        e.preventDefault();
        aumentarFonte();

    }

    // ALT + -

    if (e.altKey && e.key === "-") {

        e.preventDefault();
        diminuirFonte();

    }

    // ALT + C

    if (e.altKey && e.key.toLowerCase() === "c") {

        e.preventDefault();
        altoContraste();

    }

    // ALT + L

    if (e.altKey && e.key.toLowerCase() === "l") {

        e.preventDefault();
        lerPagina();

    }

    // ESC

    if (e.key === "Escape") {

        pararLeitura();

    }

});