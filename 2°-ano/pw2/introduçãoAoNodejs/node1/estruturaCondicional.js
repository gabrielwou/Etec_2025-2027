//if simples:
let idade = 19
if (idade >= 18){
        console.log("Você é maior de idade");
    } 



//if tradicional:
let Semana = 1
if(Semana = 1){
        console.log("hoje é um dia da semana");
    } else{
        console.log("hoje é fim de semana")
    }

//if composto:
let distanciaKm = 50
let capacidadeTanque = 100
let consumo = distanciaKm/capacidadeTanque
if(consumo >=10){
    console.log("econômico")
} else if(consumo<10){
    console.log("não economico")
}

//switch:
const diaSemana = 3;
let nomeDia;
switch (diaSemana){
    case 0:
        nomeDia = "Segunda-feira"
        break;
    case 1:
        nomeDia = "Terça-feira"
        break;
    case 2:
        nomeDia = "Quarta-feira"
        break;
    case 3:
        nomeDia = "Quinta-feira"
        break;
    case 4:
        nomeDia = "Sexta-feira"
        break;
}
console.log("Hoje é : "+nomeDia);

//ternário
const nota = 8
const status = nota>5 ? "aprovado": "reprovado";
console.log(status)