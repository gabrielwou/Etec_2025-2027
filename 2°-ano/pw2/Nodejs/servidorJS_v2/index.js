//importando funçoes

import {maiorIdade,diaUtil,calculaConsumo,diaSemana,statusNota} from "./js/estruturaCondicional.js"
import {calculaIdade,areaTriangulo,soma,divisao,raiz,potencia} from "./js/operacoesAritimeticas.js"
import {corFav,verificaNota,verificaEst,verificaIdade,tempAgua,validaUsuario} from "./js/operadoresRelacionais.js"
import {funcaoBusca,funcaoAdicao,funcaoRemocao,funcaoAcumulacao} from "./js/Vetores.js"
import {contagemRegressiva,padraoPiramide,dobroDoVetor,cortarSalario,pedirSenha} from "./js/lacoDeRepeticao.js"
import {volumeCubo,calculaImc,volumeOleo } from "./js/declaracaodeVariaveis.js"
//importando express
import express from 'express'

const app = express()

//Funções do arquivo declaraçãodeVariaveis.js 
app.get('/volumeCubo/:arestas', (req, res) => {
    let {arestas} = req.params
    let resposta = volumeCubo(arestas);
    let retorno = {
        mensagem: "O volume do Cubo é",
        resultado: resposta
    }
    res.json(retorno)
});

app.get('/calculaImc/:altura/:peso', (req, res)=>{
    let {altura,peso} = req.params
    let resposta = calculaImc(altura,peso)
    let retorno = {
        mensagem: "Seu imc é: ",
        resultado: resposta
    }
    res.json(retorno)
})

app.get('/volumeOleo/:raio/:altura', (req, res)=> {
    let {raio,altura} = req.params
    let resposta = volumeOleo(raio,altura)
    let retorno = {
        mensagem: "O volume da lata de óleo é: ",
        resultado: resposta
    }
    res.json(retorno)
})

//Funções do arquivo Vetores.js
app.get('/Busca/:n1/:n2/:n3', (req, res)=> {
    let {n1,n2,n3} = req.params
    const resposta = funcaoBusca([n1,n2],n3)
    let retorno = { 
        resultado:resposta
    }
    res.json(retorno)
})

app.get('/Adicao/:nome1/:nome2/:nome3', (req,res)=> {
    let {nome1,nome2,nome3} = req.params
    const resposta = funcaoAdicao([nome1,nome2],nome3)
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

app.get('/Remocao/:n1/:n2/:n3', (req,res)=>{
    let {n1,n2,n3} = req.params
    const resposta = funcaoRemocao([n1,n2,n3])
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

app.get('/Acumulacao/:n1/:n2/:n3', (req,res)=>{
    let {n1,n2,n3} = req.params
    const resposta = funcaoAcumulacao([n1,n2,n3])
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

//Funções do arquivo lacoDeRepeticao.js
app.get('/Contagem/:n', (req,res)=>{
    let {n} = req.params
    const resposta = contagemRegressiva(n)
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

app.get('/cortarSalario/:sal1/:sal2/:sal3', (req,res)=>{
    let {sal1,sal2,sal3} = req.params
    const resposta = cortarSalario([sal1,sal2,sal3])
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

app.get('/dobroDoVetor/:n1/:n2/:n3/:n4', (req,res)=>{
    let {n1,n2,n3,n4} = req.params
    const resposta = dobroDoVetor([n1,n2,n3,n4])
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})


app.get('/pedirSenha/:senha', (req,res)=>{
    let {senha} = req.params
    const resposta = pedirSenha(senha)
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

app.get('/padraoPiramide', (req,res)=>{
    let {tamanho} = req.query
    const resposta = padraoPiramide(tamanho)
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

//Funções do arquivo estruturaCondicional

app.get('/maiorIdade',(req,res)=>{
    let {idade} = req.query
    const resposta = maiorIdade(idade)
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

app.get('/diaUtil',(req,res)=>{
    let {dia} = req.query
    const resposta = diaUtil(dia)
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

app.get('/calculaConsumo',(req,res)=>{
    let {distanciaKm,capTanque} = req.query
    const resposta = calculaConsumo(distanciaKm,capTanque)
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

app.get('/diaSemana',(req,res)=>{
    let{diaAtual} = req.query
    const resposta = diaSemana(parseInt(diaAtual))
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

app.get('/statusNota',(req,res)=>{
    let{nota} = req.query
    const resposta = statusNota(parseInt(nota))
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

//Funções do arquivo operacoesAritimeticas
app.get('/calculaIdade',(req,res)=>{
    let {anoAtual,dataNasc} = req.query
    const resposta = calculaIdade(anoAtual,dataNasc)
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})


//Wesley -->


app.get('/areaTriangulo',(req,res)=>{
    const resposta = areaTriangulo(10,5)
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

app.get('/soma',(req,res)=>{
    const resposta = soma(60,7)
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

app.get('/divisao',(req,res)=>{
    const resposta = divisao(134,2)
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

app.get('/raiz',(req,res)=>{
    const resposta = raiz(4096)
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

app.get('/potencia',(req,res)=>{
    const resposta = potencia(6,7)
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

//Funções do arquivo operadoresRelacionais
app.get('/corFav',(req,res)=>{
    const resposta = corFav('laranja')
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

app.get('/verificaNota',(req,res)=>{
    const resposta = verificaNota(6)
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

app.get('/verificaEst',(req,res)=>{
    const resposta = verificaEst(7)
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

app.get('/verificaIdade',(req,res)=>{
    const resposta = verificaIdade(66)
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

app.get('/tempAgua',(req,res)=>{
    const resposta = tempAgua(200)
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

app.get('/validaUsuario',(req,res)=>{
    const resposta = validaUsuario(2026,'wesley')
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})


app.listen(3000, () => {
  console.log('Servidor ativo em http://localhost:3000')
})