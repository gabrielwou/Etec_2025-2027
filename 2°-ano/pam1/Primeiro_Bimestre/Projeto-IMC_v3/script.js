import{calculaImc,definirStatus} from './opc.js'

let trs = document.querySelectorAll('tbody tr')
let input = document.querySelector('.entrada')


for (let index = 0; index < trs.length; index++) {
    let filho = trs[index].children

    let altura = parseFloat(filho[2].textContent)
    let peso = parseFloat(filho[3].textContent)

    let imc = calculaImc(altura,peso)
    let tdimc = filho[4]
    tdimc.textContent = imc

    let tdStatus = filho[5]
    let status = definirStatus(imc,tdStatus)
}

// filtro na tabela
input.addEventListener('input', ()=>{

    let esconder = true

    trs.forEach(tr => {
        tr.visible = true
        let filho = tr.children
        
        if(!filho[5].textContent.includes(input.value)){
            tr.visible = false      
        }
    
        console.log(tr.visible)
        
        if(tr.visible){
            tr.style.display = 'table-row'
        } else {
            tr.style.display = 'none'
        }
        
    })
    console.log('----')

})

