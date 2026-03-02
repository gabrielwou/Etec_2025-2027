export function calculoMedia(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3
    return media.toFixed(2)
}

export function statusAluno(media, elementoStatus){
    let status = document.querySelector('.status')
    if(media < 4){
        elementoStatus.textContent = "Reprovado"
    }else if(media < 6){
        elementoStatus.textContent = "Recuperação"
    }else{
        elementoStatus.textContent = "Aprovado"
    }

}