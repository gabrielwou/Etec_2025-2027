function calculaImc(altura,peso){
    let imc = peso/(altura*altura)
    return imc.toFixed(2)
}

function definirStatus(imc, tdStatus){
    if(imc < 18.5){
    tdStatus.textContent = "Abaixo do peso"
    } else if(imc < 24.9){
    tdStatus.textContent = "Peso normal"
    } else if(imc< 29.9){
    tdStatus.textContent = "Sobrepeso"
    } else if(imc < 34.9){
    tdStatus.textContent = "Obesidade Grau I"
    } else if(imc < 39.9){
    tdStatus.textContent = "Obesidade Grau II"
    } else {
    tdStatus.textContent = "Obesidade Grau III"
    }
}

export{calculaImc,definirStatus}