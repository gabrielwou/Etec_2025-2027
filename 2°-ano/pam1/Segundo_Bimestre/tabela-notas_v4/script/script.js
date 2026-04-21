import {calcularMedia,definirStatus} from './opc.js'
import {PreencherDados} from './Preencher.js'
import {atualizarTabela} from './atualizarTabela.js'
let trs = document.querySelectorAll('tbody tr')
let input = document.querySelector('.entrada')

trs = await PreencherDados(trs)
trs = atualizarTabela(trs,calcularMedia, definirStatus)

// filtro na tabela
input.addEventListener('input', ()=>{

    let esconder = true

    trs.forEach(tr => {
        tr.visible = true
        let filho = tr.children
        
        if(!filho[5].textContent.toLowerCase().trim().startsWith(input.value.toLowerCase().trim())){
        //if(!filho[5].textContent.includes(input.value)){//
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






