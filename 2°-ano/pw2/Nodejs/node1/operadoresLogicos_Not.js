
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

