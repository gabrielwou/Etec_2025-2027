import {times} from './bd.js';
import {calculaPontos} from './opc.js';

//fução para calcular os pontos dos times
function pontosTimes(){
    for(let i = 0; i < times.length; i++){
        times[i].pontuacao = calculaPontos(times[i].v, times[i].e);
    }

    return times;
}

//função 8 melhores times com base na pontuação 
function filtrarTimes(){
    let timesCopia = [...times]; 

    for(let i = 0; i < timesCopia.length; i++){
        timesCopia[i].pontuacao = calculaPontos(timesCopia[i].v, timesCopia[i].e);
    }

    timesCopia.sort((a, b) => b.pontuacao - a.pontuacao);

    while (timesCopia.length > 8) {
        timesCopia.pop();
    }

    return timesCopia;
}

//função 4 melhores times pelo saldo de gols
function filtrarTimesSg(){
    let timesCopia2 = [...times]; 

    timesCopia2.sort((a, b) => b.sg - a.sg);

    while (timesCopia2.length > 4) {
        timesCopia2.pop();
    }

    return timesCopia2;
}

//função N melhores times
function filtrarTimesN(n){
    let timesCopia = [...times]; 

    for(let i = 0; i < timesCopia.length; i++){
        timesCopia[i].pontuacao = calculaPontos(timesCopia[i].v, timesCopia[i].e);
    }

    timesCopia.sort((a, b) => b.pontuacao - a.pontuacao);

    while (timesCopia.length > n) {
        timesCopia.pop();
    }

    return timesCopia;
}

//função times que passaram para a próxima fase
function filtrarTimesFase(){
    let timesCopia = [...times]; 

    timesCopia.sort((a, b) => {
        //ordem por pontos
        if (b.v != a.v){
            return b.v - a.v;
        }
        // ordem por saldo de gols
        return b.sg - a.sg;
    });

    while (timesCopia.length > 8) {
        timesCopia.pop();
    }

    return timesCopia;
}

//função para calcular o desempenho dos times com base na pontuação
function desempenhoTime(){
    let timesCopia = [...times]; 

    for(let i = 0; i < timesCopia.length; i++){
        timesCopia[i].desempenho = (calculaPontos(timesCopia[i].v, timesCopia[i].e)/24)*100;
    }
    return timesCopia;
}

//função para ordenar os times pelos pontos
function timesOrdem(){
    let timesCopia = [...times]; 

    for(let i = 0; i < timesCopia.length; i++){
        timesCopia[i].pontuacao = calculaPontos(timesCopia[i].v, timesCopia[i].e);
    }

    timesCopia.sort((a, b) => b.pontuacao - a.pontuacao);

    return timesCopia;
}
export{filtrarTimes,filtrarTimesSg,filtrarTimesN,filtrarTimesFase,desempenhoTime,timesOrdem,pontosTimes}