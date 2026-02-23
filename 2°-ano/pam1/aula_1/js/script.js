// msg de alerta
//          alert("Hello world")

//input pelo navegador

/*
let nome = prompt("ola, diga o seu nome") //do while
console.log("seja bem vindo "+nome)

let msg = "ola mundo v2"
console.log(msg)
*/


let body = document.querySelector('body')

let titulo = document.querySelector('.titulo')
let texto = document.querySelector('#texto')
let textoPika = 'eu odeio js '
for(let i=0;i<255;i++){
    textoPika = textoPika + 'eu odeio js '
}
titulo.textContent = textoPika
texto.textContent = textoPika