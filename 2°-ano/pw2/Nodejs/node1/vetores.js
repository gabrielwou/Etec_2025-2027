/*busca:
Crie um vetor com 5 números, crie uma variavel e verifique se o número desta variavel existe ou não no vetor.
*/
let busca = [10,13,33,25,22]
let valorBusca = 7
let resultado = 0
busca.forEach(function(element){
    if(element == valorBusca){
       resultado = 1
    } 
});
if(resultado == 1 ){
     console.log("este número existe no vetor")
} else {
    console.log("este número não existe no vetor")
}

/*adição:
Crie um vetor com 3 nomes, adicione um nome ao final do vetor e mostre o vetor atalizado.
*/
let adicao = ["Gabriel","Paulo","Wesley"]
adicao.push("Cauã")
console.log(adicao) 

/*Remoção:
Crie um vetor com 5 números, remova o ultimo elemento e mostre o vetor atualizado.
*/
let remocao = [256,13,145,167,987]
remocao.pop()
console.log(remocao)

/*acumulação:
Crie um vetor com 6 números, some os valores e mostre a soma total.
*/
let acumulacao = [13,24,133,243,124,567]
let soma = 0 
for(i=0;i<6;i++){
    soma = soma+acumulacao[i]
}
console.log("A soma total é: "+soma)