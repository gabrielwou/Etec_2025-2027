/*Diferente( != ):
Crie um programa para verificar se a cor favorita é correspondente a do usuário
*/
let corFav = "azul"
if(corFav !== "laranja"){
    console.log("esta não é minha cor favorita")
}

/*Menor( < ):
Crie um programa para saber se um aluno foi reprovado ou não
*/
let nota = 8
if(nota<5){
    console.log("reprovado")
}else{
    console.log("aprovado")
}

/*Menor ou igual( <= ):
Criar um programa que verifique se o estoque está baixo ou estável.
*/
let estoque = 4
if(estoque<=5){
    console.log("Baixo Estoque")
}else{
    console.log("estoque estável")
}

/*Maior( > ):
Criar um programa que verifique se o usuário é maior de idade
*/
let idade = 50
if(idade>18){
    console.log("Você é maior de idade")
} else{
    console.log("Você é menor de idade")
}

/*Maior ou igual(>=):
Criar um programa que verifique se a água está em ebulição.
*/
let tempAgua = 110
if(tempAgua>=100){
    console.log("A água está em estado de ebulição")
}else{
    console.log("A água não está em estado de ebulição")
}

/*Igual(==):
Criar um programa que garanta acesso se as informações forem iguais as registradas no sistema.
*/
let senha = 1234
let acesso = "admin"
if(senha==1234 &acesso=="admin"){
    console.log("Acesso concedido")
}else{
    console.log("Acesso negado")
}