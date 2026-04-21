function atualizarTabela(trs,calcularMedia,definirStatus){
    for (let index = 0; index < trs.length; index++) {
        let filho = trs[index].children

        let nota1 = parseFloat(filho[1].textContent)
        let nota2 = parseFloat(filho[2].textContent)
        let nota3 = parseFloat(filho[3].textContent)

        let media = calcularMedia(nota1,nota2,nota3)
        let tdMedia = filho[4]
        tdMedia.textContent = media.toFixed(2)

        let tdStatus = filho[5]
        let status = definirStatus(media)
        tdStatus.textContent = status
    }

    return trs
}

export{atualizarTabela}