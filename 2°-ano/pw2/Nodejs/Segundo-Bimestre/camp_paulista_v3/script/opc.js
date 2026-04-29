import { times } from './bd.js'

function calculaPontos(v,e){
    let pontos = (v*3)+e;
    return pontos;
}

function buscarTime(nomeDoTime){
    for (let i = 0; i < times.length; i++) {
        if (times[i].clube.toLowerCase() === nomeDoTime.toLowerCase()) {
            return times[i];
        }
    }
}

export{calculaPontos, buscarTime}