
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
