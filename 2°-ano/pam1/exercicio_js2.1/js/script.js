let nota1 = document.querySelector('.nota1')
let nota2 = document.querySelector('.nota2')
let nota3 = document.querySelector('.nota3')
//let medias = document.querySelector('.media')




nota1 = parseInt(nota1.textContent)
nota2 = parseInt(nota2.textContent)
nota3 = parseInt(nota3.textContent)

let media = (nota1 + nota2 + nota3) / 3 

console.log(media)

let status = document.querySelector('.status')




mediaTela.textContent = media.toFixed(2)
statusAluno(media) 
