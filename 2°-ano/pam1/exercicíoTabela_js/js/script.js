import {calculoMedia,statusAluno} from './opc.js'

let nota1 = document.querySelectorAll('.nota1')
let nota2 = document.querySelectorAll('.nota2')
let nota3 = document.querySelectorAll('.nota3')
let mediaAluno = document.querySelectorAll('.media')
let status = document.querySelectorAll('.status')

let vetor_nota1 = []
let vetor_nota2 = []
let vetor_nota3 = []

for(let i=0;i<6;i++){
    vetor_nota1[i] = Number(nota1[i].textContent)
}
for(let i=0;i<6;i++){
    vetor_nota2[i] = Number(nota2[i].textContent)
}
for(let i=0;i<6;i++){
    vetor_nota3[i] = Number(nota3[i].textContent)
}
let media = []
for(let i=0;i<6;i++){
    media[i] = calculoMedia(vetor_nota1[i],vetor_nota2[i],vetor_nota3[i])
    mediaAluno[i].textContent = media[i]
    statusAluno(media[i], status[i])
}
















    

     