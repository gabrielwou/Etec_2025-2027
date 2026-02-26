/*While:
Criar um programa que imprima uma contagem regressiva de (10 a 1)
*/
let contagem = 10
while (contagem > 0){
    console.log(contagem)
    contagem = contagem-1
}

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

/*forEach
Crie um programa que percorra um vetor com 5 números e use forEach para mostrar no console
o número dele e o dobro dele.
*/
const numeroEach = [2,53,97,23,37]

numeroEach.forEach(function(element){
    let dobroEach = element*2;
    console.log("número: "+element)
    console.log("dobro: "+dobroEach)
});

/*map:
Uma empresa decidiu cortar em 10% o salário de todos os funcionários.
crie um programa que calcule todos os salários ajustados.
*/
const salarios = [1200,2500,3200,1800]
const salarioCortado = salarios.map((salario)=>(salario*9)/10);
console.log("Salário reajustado: "+salarioCortado)


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
