/*While:
Criar um programa que imprima uma contagem regressiva de (10 a 1)
*/
let contagem = 10
while (contagem > 0){
    console.log(contagem)
    contagem = contagem-1
}

/*Do while:
faca um programa que pede uma senha para o usuario, caso a senha não for 1234
faça o programa exibir uma mensagem de erro e pedir a senha novamente.
*/
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

/*for
Crie um programa que mostre no terminal o seguinte padrão:
1
121
12321
1234321
123454321
*/
let k=1;
for(let i= 1; i<10;i++){
    let linha="";
    linha = linha + k;
    for(let j=1; j < i;j++){
        if(k<i){
            k++;
            linha = linha+k;
        }
    }
    for(let j=1; j<i;j++){
        if(k !== 1){
            k--;
            linha = linha + k;
        }
    }
    console.log(linha)
    k=1;
}


