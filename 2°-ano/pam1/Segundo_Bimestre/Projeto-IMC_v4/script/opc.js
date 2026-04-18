function calculaImc(altura,peso){
    let imc = peso/(altura*altura)
    return imc.toFixed(2)
}

function definirStatus(imc, tdStatus){
    if(imc < 18.5){
    tdStatus.textContent = "Abaixo do peso"
    tdStatus.classList.add('estadoGrave')    
    } else if(imc < 24.9){
    tdStatus.textContent = "Peso normal"
    tdStatus.classList.add('normal')   
    } else if(imc< 29.9){
    tdStatus.textContent = "Sobrepeso"
    tdStatus.classList.add('outros')
    } else if(imc < 34.9){
    tdStatus.textContent = "Obesidade Grau I"
    tdStatus.classList.add('outros')
    } else if(imc < 39.9){
    tdStatus.textContent = "Obesidade Grau II"
    tdStatus.classList.add('outros')
    } else {
    tdStatus.textContent = "Obesidade Grau III"
    tdStatus.classList.add('estadoGrave')
    }
}

export{calculaImc,definirStatus}