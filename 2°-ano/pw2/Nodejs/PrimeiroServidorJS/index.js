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
app.get('/volumeCubo', (req, res) => {
    const resposta = volumeCubo(5);
    let retorno = {
        mensagem: "O volume do Cubo é",
        resultado: resposta
    }
    res.json(retorno)
});

app.get('/calculaImc', (req, res)=>{
    const resposta = calculaImc(1.80,60)
    let retorno = {
        mensagem: "Seu imc é: ",
        resultado: resposta
    }
    res.json(retorno)
})

app.get('/volumeOleo', (req, res)=> {
    const resposta = volumeOleo(5,10)
    let retorno = {
        mensagem: "O volume da lata de óleo é: ",
        resultado: resposta
    }
    res.json(retorno)
})

//Funções do arquivo Vetores.js
app.get('/Busca', (req, res)=> {
    const resposta = funcaoBusca([12,1,2,3,5],5)
    let retorno = { 
        resultado:resposta
    }
    res.json(retorno)
})

app.get('/Adicao', (req,res)=> {
    const resposta = funcaoAdicao(["gabs","joao","wesley"],"caua")
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

app.get('/Remocao', (req,res)=>{
    const resposta = funcaoRemocao([1,2,3,4,5])
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

app.get('/Acumulacao', (req,res)=>{
    const resposta = funcaoAcumulacao([5,5,5,5,5])
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

//Funções do arquivo lacoDeRepeticao.js
app.get('/Contagem', (req,res)=>{
    const resposta = contagemRegressiva(8)
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

app.get('/cortarSalario', (req,res)=>{
    const resposta = cortarSalario([1100,1650,1400])
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

app.get('/dobroDoVetor', (req,res)=>{
    const resposta = dobroDoVetor([10,3,4,5,6,])
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})


app.get('/pedirSenha', (req,res)=>{
    const senha = req.query.senha
    const resposta = pedirSenha("1234")
    let retorno = {
        senha: req.query.senha,
        resultado: resposta
    }
    res.json(retorno)
})

app.get('/padraoPiramide', (req,res)=>{
    const resposta = padraoPiramide(5)
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

//Funções do arquivo estruturaCondicional

app.get('/maiorIdade',(req,res)=>{
    const resposta = maiorIdade(19)
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

app.get('/diaUtil',(req,res)=>{
    const resposta = diaUtil(4)
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

app.get('/calculaConsumo',(req,res)=>{
    const resposta = calculaConsumo(10,15)
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

app.get('/diaSemana',(req,res)=>{
    const resposta = diaSemana(0)
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

app.get('/statusNota',(req,res)=>{
    const resposta = statusNota(7)
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

//Funções do arquivo operacoesAritimeticas
app.get('/calculaIdade',(req,res)=>{
    const resposta = calculaIdade(2026,2012)
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

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