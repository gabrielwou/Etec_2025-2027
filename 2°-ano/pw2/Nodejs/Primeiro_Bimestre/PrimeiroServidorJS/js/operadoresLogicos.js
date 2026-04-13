/* E:
Um show oferece uma promoção de dia dos namoradas para quem é maior de idade e está acompanhado.
Peça a idade do usuário e pergunte se ele está acompanhado (sim/não).
O programa deve exibir "Tem direito a promoção" se ambas as condições forem atendidas. 
*/

function temDireitoE(idade, acompanhado) {
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

function temDireitoNot(idade, trabalhando) {
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
function temDireitoOu(idade, estudante) {
    if(idade > 60 || estudante == "sim") {
      console.log("Tem direito ao desconto");
    } else {
      console.log("Não tem direito ao desconto");
    }
}

