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
    let {base,altura} = req.query
    const resposta = areaTriangulo(base,altura)
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

app.get('/soma',(req,res)=>{
    let {n1,n2} = req.query
    const resposta = soma(parseInt(n1),parseInt(n2))
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

app.get('/divisao',(req,res)=>{
    let {n1,n2} = req.query
    const resposta = divisao(n1,n2)
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

app.get('/raiz',(req,res)=>{
    let {n} = req.query
    const resposta = raiz(n)
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

app.get('/potencia',(req,res)=>{
    let {n1,n2} = req.query
    const resposta = potencia(n1,n2)
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

//Funções do arquivo operadoresRelacionais
app.get('/corFav',(req,res)=>{
    let {cor} = req.query
    const resposta = corFav(cor)
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

//formato 2

app.get('/verificaNota/:nota',(req,res)=>{
    let {nota} = req.params
    const resposta = verificaNota(nota)
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

app.get('/verificaEst/:numero',(req,res)=>{
    let {numero} = req.params
    const resposta = verificaEst(numero)
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

app.get('/verificaIdade/:idade',(req,res)=>{
    let {idade} = req.params
    const resposta = verificaIdade(idade)
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

app.get('/tempAgua/:agua',(req,res)=>{
    let {agua} = req.params
    const resposta = tempAgua(agua)
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})

app.get('/validaUsuario/:senha/:usuario',(req,res)=>{
    let {senha,usuario} = req.params
    const resposta = validaUsuario(senha,usuario)
    let retorno = {
        resultado: resposta
    }
    res.json(retorno)
})


app.listen(3000, () => {
  console.log('Servidor ativo em http://localhost:3000')
})