import{calculaImc,definirStatus} from './opc.js'
import {PreencherDados} from './Preencher.js'
import {atualizarTabela} from './atualizarTabela.js'
let trs = document.querySelectorAll('tbody tr')
let input = document.querySelector('.entrada')

trs = await PreencherDados(trs)
trs = atualizarTabela(trs, calculaImc, definirStatus)


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

