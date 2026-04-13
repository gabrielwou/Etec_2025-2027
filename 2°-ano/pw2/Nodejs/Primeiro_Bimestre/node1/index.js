//vetor
/*busca:
Crie um vetor com 5 números, crie uma variavel e verifique se o número desta variavel existe ou não no vetor.
*/

function funcaoBusca(busca,valorBusca){
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
}
/*adição:
Crie um vetor com 3 nomes, adicione um nome ao final do vetor e mostre o vetor atalizado.
*/

function funcaoAdicao(vetor,nome){
    vetor.push(nome)
    console.log(vetor)
}

/*Remoção:
Crie um vetor com 5 números, remova o ultimo elemento e mostre o vetor atualizado.
*/
function funcaoRemocao(vetor){
    remocao.pop()
    console.log(vetor)
}

/*acumulação:
Crie um vetor com 6 números, some os valores e mostre a soma total.
*/

function funcaoAcumulacao(vetor){
    let soma = 0 
    for(i=0;i<6;i++){
        soma = soma+vetor[i]
    }
    console.log("A soma total é: "+soma)
}

/* E:
Um show oferece uma promoção de dia dos namoradas para quem é maior de idade e está acompanhado.
Peça a idade do usuário e pergunte se ele está acompanhado (sim/não).
O programa deve exibir "Tem direito a promoção" se ambas as condições forem atendidas. 
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Qual sua idade? ", (idade) => {  //executa a primeir pergunta
    rl.question("voce está acompanhado? (sim / nao) ", (acompanhado) => {  //executa a segunda pergunta

    if(idade > 18 && acompanhado == "sim") {
      console.log("Tem direito a promoção");
    } else {
      console.log("Não tem direito a promoção");
    }

    rl.close();
    }); //fim primeira pergunta
});  //fim segunda pergunta

// em forma de função 
function temDireito(idade, acompanhado) {
  if (idade > 18 && acompanhado === "sim") {
    console.log("Tem direito a promoção");
  } else {
    console.log("Não tem direito a promoção");
  }
}

/* Not:
Um evento oferece uma promoção especial de estudante apenas para quem não é maior de idade ou não está trabalhando.
Peça a idade do usuário e pergunte se ele está trabalhando (sim ou nao).
O programa deve exibir "Tem direito à promoção" se pelo menos uma das duas condições for verdadeira.
Caso contrário, deve exibir "Não tem direito à promoção".
*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Qual sua idade? ", (idade) => {  //executa a primeir pergunta
    rl.question("voce está trabalhando? (sim / nao) ", (trabalhando) => {  //executa a segunda pergunta

    if(!idade > 18 || trabalhando != "sim") {
      console.log("Tem direito a promoção");
    } else {
      console.log("Não tem direito a promoção");
    }

    rl.close();
    }); //fim primeira pergunta
}); //fim segunda pergunta

// em forma de função
function temDireito(idade, trabalhando) {
    if(!idade > 18 || trabalhando != "sim") {
      console.log("Tem direito a promoção");
    } else {
      console.log("Não tem direito a promoção");
    }
}


/*Ou
Um cinema oferece desconto para quem é estudante OU tem mais de 60 anos.
Peça a idade do usuário e pergunte se ele é estudante (sim/não).
O programa deve exibir "Tem direito ao desconto" se uma das condições for atendida. 
*/

const readline = require('readline');

const rl1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Qual sua idade? ", (idade) => {  //executa a primeir pergunta
    rl.question("voce é um estudante? (sim / nao) ", (estudante) => {  //executa a segunda pergunta

    if(idade > 60 || estudante == "sim") {
      console.log("Tem direito ao desconto");
    } else {
      console.log("Não tem direito ao desconto");
    }

    rl.close();
    }); //fim primeira pergunta
}); //fim segunda pergunta

// em forma de função

function temDireito(idade, estudante) {
    if(idade > 60 || estudante == "sim") {
      console.log("Tem direito ao desconto");
    } else {
      console.log("Não tem direito ao desconto");
    }
}