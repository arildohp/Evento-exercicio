AOS.init();

const dataDoEvento = new Date("dec 2, 2022  19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMS = 100 * 60 * 60 * 24;
    const horaEmMS = 100 * 60 * 60;
    const minutoEmMs = 100 * 60;
    
    const diasAteOEvento = Math.floor (distanciaAteOEvento / diaEmMS);
    const horasAteOEvento = Math.floor ((distanciaAteOEvento % diaEmMS) / horaEmMS);
    const minutosAteOEvento = Math.floor ((distanciaAteOEvento % horaEmMS) / minutoEmMs);
    const segundosAteOEvento = Math.floor ((distanciaAteOEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000);