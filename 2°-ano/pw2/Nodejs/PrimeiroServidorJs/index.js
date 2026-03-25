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
    res.send("O volume do Cubo é: "+resposta)
});

app.get('/calculaImc', (req, res)=>{
    const resposta = calculaImc(1.80,60)
    res.send("Seu imc é: "+resposta)
})

app.get('/volumeOleo', (req, res)=> {
    const resposta = volumeOleo(5,10)
    res.send("O volume da lata de óleo é: "+resposta)
})

//Funções do arquivo Vetores.js
app.get('/Busca', (req, res)=> {
    const resposta = funcaoBusca([12,1,2,3,5],5)
    res.send(resposta)
})

app.get('/Adicao', (req,res)=> {
    const resposta = funcaoAdicao(["gabs","joao","wesley"],"caua")
    res.send('<h1></h1>'+resposta)
})

app.get('/Remocao', (req,res)=>{
    const resposta = funcaoRemocao([1,2,3,4,5])
    res.send('<h1></h1>'+resposta)
})

app.get('/Acumulacao', (req,res)=>{
    const resposta = funcaoAcumulacao([5,5,5,5,5])
    res.send(resposta)
})

//Funções do arquivo lacoDeRepeticao.js
app.get('/Contagem', (req,res)=>{
    const resposta = contagemRegressiva(8)
    res.send('<h1><h1>'+resposta)
})

app.get('/cortarSalario', (req,res)=>{
    const resposta = cortarSalario([1100,1650,1400])
    res.send('<h1><h1>'+resposta)
})

app.get('/dobroDoVetor', (req,res)=>{
    const resposta = dobroDoVetor([10,3,4,5,6,])
    res.send('<h1><h1>'+resposta)
})


app.get('/pedirSenha', (req,res)=>{
    const senha = req.query.senha
    const resposta = pedirSenha("1234")
    res.send('<h1><h1>'+resposta)

})

app.get('/padraoPiramide', (req,res)=>{
    const resposta = padraoPiramide(5)
    res.send('<h1></h1>'+resposta)
})

//Funções do arquivo estruturaCondicional

app.get('/maiorIdade',(req,res)=>{
    const resposta = maiorIdade(19)
    res.send('<h1></h1>'+resposta)
})

app.get('/diaUtil',(req,res)=>{
    const resposta = diaUtil(4)
    res.send('<h1></h1>'+resposta)
})

app.get('/calculaConsumo',(req,res)=>{
    const resposta = calculaConsumo(10,15)
    res.send('<h1></h1>'+resposta)
})

app.get('/diaSemana',(req,res)=>{
    const resposta = diaSemana(0)
    res.send('<h1></h1>'+resposta)
})

app.get('/statusNota',(req,res)=>{
    const resposta = statusNota(7)
    res.send('<h1></h1>'+resposta)
})

//Funções do arquivo operacoesAritimeticas
app.get('/calculaIdade',(req,res)=>{
    const resposta = calculaIdade(2026,2012)
    res.send('<h1></h1>'+resposta)
})

app.get('/areaTriangulo',(req,res)=>{
    const resposta = areaTriangulo(10,5)
    res.send('<h1></h1>'+resposta)
})

app.get('/soma',(req,res)=>{
    const resposta = soma(60,7)
    res.send('<h1></h1>'+resposta)
})

app.get('/divisao',(req,res)=>{
    const resposta = divisao(134,2)
    res.send('<h1></h1>'+resposta)
})

app.get('/raiz',(req,res)=>{
    const resposta = raiz(4096)
    res.send('<h1></h1>'+resposta)
})

app.get('/potencia',(req,res)=>{
    const resposta = potencia(6,7)
    res.send('<h1></h1>'+resposta)
})

//Funções do arquivo operadoresRelacionais
app.get('/corFav',(req,res)=>{
    const resposta = corFav('laranja')
    res.send('<h1></h1>'+resposta)
})

app.get('/verificaNota',(req,res)=>{
    const resposta = verificaNota(6)
    res.send('<h1></h1>'+resposta)
})

app.get('/verificaEst',(req,res)=>{
    const resposta = verificaEst(7)
    res.send('<h1></h1>'+resposta)
})

app.get('/verificaIdade',(req,res)=>{
    const resposta = verificaIdade(66)
    res.send('<h1></h1>'+resposta)
})

app.get('/tempAgua',(req,res)=>{
    const resposta = tempAgua(200)
    res.send('<h1></h1>'+resposta)
})

app.get('/validaUsuario',(req,res)=>{
    const resposta = validaUsuario(2026,'wesley')
    res.send('<h1></h1>'+resposta)
})


app.listen(3000, () => {
  console.log('Servidor ativo em http://localhost:3000')
})