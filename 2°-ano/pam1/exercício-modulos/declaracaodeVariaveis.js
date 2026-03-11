//Criar um programa que calcule e apresente o volume de um cubo.
function volumeCubo(arestas){
    let volume = arestas*3
    return volume
}

//Criar um programa que calcule o imc de um indivíduo.
function calculaImc(altura,peso){
    let imc = peso/(altura*altura)
    return imc.toFixed(2)
}

/*Criar um programa que calcule apresente o volume de uma lata de óleo, que pode ser obtida através da formula
Volume = 3.14*raio²*altura */
function volumeOleo(raio,altura){
    let volume = 3.14*(raio*raio)*altura
    console.log("O volume da lata de óleo é: "+volume)
}

export{volumeCubo,calculaImc,volumeOleo}