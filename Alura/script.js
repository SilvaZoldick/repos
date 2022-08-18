const listaDeTeclas = document.querySelectorAll('.tecla');

function tocar(idDoSom) {
    document.getElementById(idDoSom).play();
}

for (var contador = 0; contador < 9; contador++) {
    const tecla = listaDeTeclas[contador];
    const tipoSom = tecla.classList[1];
    const teclaid = `som_${tipoSom}`;

    tecla.onclick = function () {
        tocar(teclaid);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function (evento) {
        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.remove('ativa');
        }
    }
}
