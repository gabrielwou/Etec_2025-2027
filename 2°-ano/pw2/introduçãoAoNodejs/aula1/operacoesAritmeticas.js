// 1) Criar um programa que leia o ano de nascimento de um usuário e o ano atual, calcule e apresente sua idade.

const anoAtual = 2026;
const anoNasc = 2009;
let idade = anoAtual-anoNasc;
console.log(idade);

// 2) Criar um programa que calcule e apresente a área de um triângulo retângulo.
const altura = 5;
const base = 10;
let area = (base*altura)/2;
console.log(area);

//  soma 
const valor1 = 25;
const valor2 = 80;
let resultado = valor1+valor2;

console.log(resultado);

// potenciação
const base2 = 2;
const expoente = 5;
let contador = 0;
let potencia = 1 ;
while (contador < expoente){
    potencia = potencia*base2;
    contador++;
}
console.log(potencia);

// Raiz
let numero = 12;
let raiz = Math.sqrt(numero);
console.log(raiz);