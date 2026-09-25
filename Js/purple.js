const discovery = document.querySelector(".discovery");
const recordingPage = document.querySelector(".recording-page");

const video = document.getElementById("ourpleVideo");
const backgroundVideo = document.getElementById("backgroundVideo");

const endMessage = document.querySelector(".end-message");

const GLITCH_TIME = 4200;
const SHOW_RECORDING_TIME = 5200;


/* =========================
   TELA DE DESCOBERTA
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {
        discovery.classList.add("interference");
    }, GLITCH_TIME);


    setTimeout(() => {

        discovery.classList.add("hidden");
        recordingPage.classList.add("visible");

        prepareRecording();

    }, SHOW_RECORDING_TIME);

});


/* =========================
   PREPARAR GRAVAÇÃO
========================= */

function prepareRecording() {

    video.currentTime = 0;

    backgroundVideo.currentTime = 0;

    /*
        O fundo pode tocar sozinho.
    */

    backgroundVideo.play().catch(() => {});

    // A mensagem permanece visível enquanto o vídeo fica em loop.
    endMessage.classList.add("visible");

    console.log("🎥 GRAVAÇÃO PRONTA");
    console.log("👆 CLIQUE PARA INICIAR");
}


/* =========================
   CLIQUE PARA INICIAR
========================= */

function startRecording() {

    console.log("🎬 INICIANDO GRAVAÇÃO...");

    video.currentTime = 0;

    /*
        IMPORTANTE:
        Não usamos muted aqui.
        O play acontece diretamente dentro
        do evento de clique.
    */

    video.muted = false;
    video.volume = 1;

    video.play()
        .then(() => {

            console.log("🔊 VÍDEO + ÁUDIO INICIADOS");

        })
        .catch(error => {

            console.error(
                "❌ ERRO AO INICIAR:",
                error
            );

        });

}


/* =========================
   CLIQUE
========================= */

recordingPage.addEventListener("pointerdown", () => {

    if (video.paused) {

        startRecording();

    }

}, { once: true });


/* =========================
   SINCRONIZAÇÃO
========================= */

video.addEventListener("play", () => {

    /*
        O fundo acompanha o vídeo principal
        somente quando a gravação começa.
    */

    const sync = setInterval(() => {

        if (video.paused) {

            clearInterval(sync);
            return;

        }

        if (backgroundVideo.readyState >= 2) {

            backgroundVideo.currentTime =
                video.currentTime;

        }

    }, 100);

});

