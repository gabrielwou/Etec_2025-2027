/*Diferente( != ):
Crie um programa para verificar se a cor favorita é correspondente a do usuário
*/
function corFav(cor){
    if(cor !== "laranja"){
        console.log("esta não é minha cor favorita")
    }else{
        console.log("esta é minha cor favorita")
    }
}

/*Menor( < ):
Crie um programa para saber se um aluno foi reprovado ou não
*/
function verificaNota(nota){
    if(nota<5){
        console.log("reprovado")
    }else{
        console.log("aprovado")
    }
}

/*Menor ou igual( <= ):
Criar um programa que verifique se o estoque está baixo ou estável.
*/
function verificaEst(estoque){
    if(estoque<=5){
        console.log("Baixo Estoque")
    }else{
        console.log("estoque estável")
    }    
}

/*Maior( > ):
Criar um programa que verifique se o usuário é maior de idade
*/
function verificaIdade(idade){
    if(idade>18){
        console.log("Você é maior de idade")
    } else{
        console.log("Você é menor de idade")
    }    
}

/*Maior ou igual(>=):
Criar um programa que verifique se a água está em ebulição.
*/
function tempAgua(temperatura){
    if(temperatura >= 100){
        console.log("A água está em estado de ebulição")
    }else{
        console.log("A água não está em estado de ebulição")
    }
}

/*Igual(==):
Criar um programa que garanta acesso se as informações forem iguais as registradas no sistema.
*/
function validaUsuario(senha,usuario){
    if(senha==1234 & usuario=="admin"){
        console.log("Acesso concedido")
    }else{
        console.log("Acesso negado")
    }
}

export{corFav,verificaNota,verificaEst,verificaIdade,tempAgua,validaUsuario}

