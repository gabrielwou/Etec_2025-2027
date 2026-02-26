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
}); //fim segunda pergunta

