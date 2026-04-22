// modulos externos
import express from 'express'
import {calculaPontos} from './script/opc.js'

// modulos internos
import { times } from './script/bd.js'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
}) 

app.get('/times', (req, res) => {
  res.json(times)
}) 

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
