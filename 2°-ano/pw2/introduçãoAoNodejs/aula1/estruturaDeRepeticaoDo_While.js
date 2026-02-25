//faca um programa que pede uma senha para o usuario, caso a senha não for 1234 faça o programa exibir uma mensagem de erro e pedir a senha novamente.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pedirSenha(){
    rl.question('Digite a senha de acesso:',(senha) => {

        if(senha !=="1234"){
            console.log("Acesso negado");
            pedirSenha();
        } else{
            console.log("Acesso concedido");
            rl.close();
        }
    });
}

pedirSenha();