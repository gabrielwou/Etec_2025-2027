//if simples:
function maiorIdade(idade){
    if (idade  >= 18){
            return "Você é maior de idade";
        }
}

//if tradicional:
function diaUtil(dia){
    if (dia <= 5){
        return "hoje é um dia útil"
    }else{
        return "hoje não é um dia útil"
    }
}

//if composto:
function calculaConsumo(distanciaKm,capTanque){
    let consumo = distanciaKm/capTanque
    if(consumo >=10){
        return "econômico"
    }else if(consumo<10){
        return "não economico"
    }    
}

//switch:
function diaSemana(diaAtual){
    let nomeDia;
    switch (diaAtual){
        case 0:
            nomeDia = "Segunda-feira"
            break;
        case 1:
            nomeDia = "Terça-feira"
            break;
        case 2:
            nomeDia = "Quarta-feira"
            break;
        case 3:
            nomeDia = "Quinta-feira"
            break;
        case 4:
            nomeDia = "Sexta-feira"
            break;
    }
    return "Hoje é : "+nomeDia;
}

//ternário
function statusNota(nota){
    let status = nota>5 ? "aprovado": "reprovado";
    return status
}
export{maiorIdade,diaUtil,calculaConsumo,diaSemana,statusNota}

