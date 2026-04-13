

// 1) Criar um programa que leia o ano de nascimento de um usuário e o ano atual, calcule e apresente sua idade.
function calculaIdade(anoAtual,anoNasc){
    let idade = anoAtual-anoNasc
    return idade
}

// 2) Criar um programa que calcule e apresente a área de um triângulo retângulo.
function areaTriangulo(altura,base){
    let area = (base*altura)/2
    return area
}


//  soma 
function soma(n1,n2){
    let resultado = n1+n2
    return resultado
}

//  divisão 
function divisao(n1,n2){
    let resultado = n1/n2
    return resultado
}

// Raiz
function raiz(n){
    let resultado = Math.sqrt(n)
    return resultado
}

// potenciação
function potencia(base,expo){
    let contador = 0;
    let potencia = 1 ;
    while (contador < expo){
        potencia = potencia*base;
        contador++;
    }
    return potencia
}




export{calculaIdade,areaTriangulo,soma,divisao,raiz,potencia}