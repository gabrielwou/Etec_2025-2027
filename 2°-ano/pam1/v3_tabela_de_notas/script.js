import {calcularMedia, definirStatus} from './opc.js'

let trs = document.querySelectorAll('tbody tr')

for (let index = 0; index < trs.length; index++) {
    let filho = trs[index].children

    let nota1 = parseFloat(filho[1].textContent)
    let nota2 = parseFloat( filho[2].textContent)
    let nota3 = parseFloat(filho[3].textContent)
    
    let tdStatus = filho[5]

    let media = calcularMedia(nota1, nota2, nota3)
    let tdMedia = filho[4]
    tdMedia.textContent = media.toFixed(2)
    let status = definirStatus(media, tdStatus)
}

// ITERADOR
trs.forEach(tr => {
    let filhos = tr.children
    
    let status = filhos[5]
       
    if(status.textContent == 'REPROVADO'){
        status.style.color =  'red'
        status.style.fontWeight = 'bold'
    } else if(status.textContent == 'RECUPERAÇÃO'){
       status.style.backgroundColor = 'gray'
       status.style.fontSize = '15px'
    } else{ 
        status.style.borderColor = 'green'
        status.style.border = '5px'+'solid'
    }
})







