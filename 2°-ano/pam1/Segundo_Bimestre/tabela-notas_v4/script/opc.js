function calcularMedia(nota1, nota2, nota3){
    let media = (nota1 + nota2 + nota3) / 3
    return media
}

function definirStatus(media){
    
    if(media <= 4){
        return "REPROVADO"
    } else if(media <6 ){
        return "RECUPERAÇÃO"
    } else{
        return "APROVADO"
    }
}

export{calcularMedia,definirStatus}
