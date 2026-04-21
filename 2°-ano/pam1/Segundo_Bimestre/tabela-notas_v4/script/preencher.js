async function PreencherDados(trs){
    let promise = await fetch('http://127.0.0.1:5500/script/bd.json')
    let pessoas = await promise.json()

    for(let index = 0; index < pessoas.length; index++){
        let filhos = trs[index].children
    
        filhos = Array.from(filhos)

        filhos[0].textContent = pessoas[index].nome
        filhos[1].textContent = pessoas[index].nota1
        filhos[2].textContent = pessoas[index].nota2
        filhos[3].textContent = pessoas[index].nota3

    }

    return trs
}

export{PreencherDados}

