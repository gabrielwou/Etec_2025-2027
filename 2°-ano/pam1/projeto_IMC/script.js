import{calculaImc,definirStatus} from './opc.js'

let trs = document.querySelectorAll('tbody tr')

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