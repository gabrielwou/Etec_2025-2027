
/*While:
Criar um programa que imprima uma contagem regressiva de (10 a 1)
*/

function contagemRegressiva(contagem) {
    let resultado = []
    
    while (contagem > 0){
        resultado.push(contagem)
        contagem--
    }

    return resultado
}

/*for
Crie um programa que mostre no terminal o seguinte padrão:
1
121
12321
1234321
123454321
*/
function padraoPiramide(tamanho) {
let k=1;
let resultado = ""
  for(let i= 1; i<tamanho;i++){
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
      resultado = resultado + linha + "-"
      k=1;
      
  }
  return resultado
}

/*map:
Uma empresa decidiu cortar em 10% o salário de todos os funcionários.
crie um programa que calcule todos os salários ajustados.
*/
function cortarSalario(salarios){
    const salarioCortado = salarios.map((salario)=>(salario*9)/10);
    return "Salário reajustado: "+salarioCortado
}


/*forEach
Crie um programa que percorra um vetor e use forEach para mostrar no console
o número dele e o dobro dele.
*/
function dobroDoVetor(vetor){
    let resultado = ""
    vetor.forEach(function(element){
        let dobroEach = element*2;
        resultado = resultado + " número: "+element+"  - "+" dobro: "+dobroEach;
    });
    return resultado
}


/*Do while:
faca um programa que pede uma senha para o usuario, caso a senha não for 1234
faça o programa exibir uma mensagem de erro e pedir a senha novamente.
*/


function pedirSenha(senha){
    if(senha !=="1234"){
        return "Acesso negado"
    } else{
        return "Acesso concedido";
    }
}


export{contagemRegressiva,padraoPiramide,dobroDoVetor,cortarSalario,pedirSenha}

