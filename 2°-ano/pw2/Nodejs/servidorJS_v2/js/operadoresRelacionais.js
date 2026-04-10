/*Diferente( != ):
Crie um programa para verificar se a cor favorita é correspondente a do usuário
*/
function corFav(cor){
    if(cor !== "laranja"){
        return "esta não é minha cor favorita"
    }else{
        return "esta é minha cor favorita"
    }
}

/*Menor( < ):
Crie um programa para saber se um aluno foi reprovado ou não
*/
function verificaNota(nota){
    if(nota<5){
        return "reprovado"
    }else{
        return "aprovado"
    }
}

/*Menor ou igual( <= ):
Criar um programa que verifique se o estoque está baixo ou estável.
*/
function verificaEst(estoque){
    if(estoque<=5){
        return "Baixo Estoque"
    }else{
        return "estoque estável"
    }    
}

/*Maior( > ):
Criar um programa que verifique se o usuário é maior de idade
*/
function verificaIdade(idade){
    if(idade>=18){
        return "Você é maior de idade"
    } else{
        return "Você é menor de idade"
    }    
}

/*Maior ou igual(>=):
Criar um programa que verifique se a água está em ebulição.
*/
function tempAgua(temperatura){
    if(temperatura >= 100){
        return "A água está em estado de ebulição"
    }else{
        return "A água não está em estado de ebulição"
    }
}

/*Igual(==):
Criar um programa que garanta acesso se as informações forem iguais as registradas no sistema.
*/
function validaUsuario(senha,usuario){
    if(senha==1234 & usuario=="admin"){
        return "Acesso concedido"
    }else{
        return "Acesso negado"
    }
}

export{corFav,verificaNota,verificaEst,verificaIdade,tempAgua,validaUsuario}

