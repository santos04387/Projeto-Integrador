// ================================
// TAMANHO DA FONTE
// ================================

let tamanhoFonte = 18;

function aumentarFonte() {
    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + "px";
}

function diminuirFonte() {
    if (tamanhoFonte > 12) {
        tamanhoFonte -= 2;
        document.body.style.fontSize = tamanhoFonte + "px";
    }
}

// ================================
// ALTO CONTRASTE
// ================================

function altoContraste() {
    document.body.classList.toggle("altoContraste");
}

// ================================
// LEITOR DE TELA
// ================================

let fala = window.speechSynthesis;

function lerPagina() {

    fala.cancel();

    let texto = document.querySelector("main").innerText;

    let leitura = new SpeechSynthesisUtterance(texto);

    leitura.lang = "pt-BR";
    leitura.rate = 1;
    leitura.pitch = 1;

    fala.speak(leitura);

}

// ================================
// PARAR LEITURA
// ================================

function pararLeitura() {
    fala.cancel();
}

// ================================
// VOLTAR AO TOPO
// ================================

function voltarTopo() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}

// ================================
// NAVEGAÇÃO POR TECLADO
// ================================

document.addEventListener("keydown", function(event){

    // Alt + A → aumenta fonte
    if(event.altKey && event.key === "a"){
        aumentarFonte();
    }

    // Alt + D → diminui fonte
    if(event.altKey && event.key === "d"){
        diminuirFonte();
    }

    // Alt + C → alto contraste
    if(event.altKey && event.key === "c"){
        altoContraste();
    }

    // Alt + L → leitor de tela
    if(event.altKey && event.key === "l"){
        lerPagina();
    }

});
<div class="mt-4">

    <button class="btn btn-success" onclick="aumentarFonte()">
        A+
    </button>

    <button class="btn btn-warning" onclick="diminuirFonte()">
        A-
    </button>

    <button class="btn btn-dark" onclick="altoContraste()">
        Alto Contraste
    </button>

    <button class="btn btn-primary" onclick="lerPagina()">
        🔊 Ler Página
    </button>

    <button class="btn btn-danger" onclick="pararLeitura()">
        ⏹ Parar
    </button>

</div>