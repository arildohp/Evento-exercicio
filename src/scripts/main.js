AOS.init();

const dataDoEvento = new Date("dec 2, 2023  19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diasAteOEvento = match.floor(distanciaAteOEvento / (1000 * 60 * 60 * 24));
   
    console.log(diasAteOEvento);
}, 1000);