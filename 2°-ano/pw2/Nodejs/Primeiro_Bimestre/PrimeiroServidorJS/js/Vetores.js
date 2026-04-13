/*busca:
Crie um vetor, crie uma variavel e verifique se o número desta variavel existe ou não no vetor.
*/
function funcaoBusca(busca,valorBusca){
    let resultado = 0
    busca.forEach(function(element){
        if(element == valorBusca){
        resultado = 1
        } 
    });
    if(resultado == 1 ){
        return "este número existe no vetor"
    } else {
        return "este número não existe no vetor"
    }
}

/*adição:
Crie um vetor com 3 nomes, adicione um nome ao final do vetor e mostre o vetor atalizado.
*/

function funcaoAdicao(vetor,nome){
    vetor.push(nome)
    return vetor
}

/*Remoção:
Crie um vetor com 5 números, remova o ultimo elemento e mostre o vetor atualizado.
*/
function funcaoRemocao(vetor){
    vetor.pop()
    return vetor
}

/*acumulação:
Crie um vetor , some os valores e mostre a soma total.
*/

function funcaoAcumulacao(vetor){
    let soma = 0
    for(let i=0;i<vetor.length;i++){
        soma = soma+vetor[i]
    }
    return "A soma total é: "+soma
}

export{funcaoBusca,funcaoAdicao,funcaoRemocao,funcaoAcumulacao}