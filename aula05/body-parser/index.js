import express from 'express'
import bodyParser from 'body-parser'
import { getDepartamentos, getDepartamento } from './departamentos.js'


const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Welcome')
})

app.get('/departamentos', (req, res) => {
  const result = getDepartamentos()

  res.json(result)
})

app.get('/departamentos/:id_departamento', (req, res) => {
  const { id_departamento } = req.params

  const result = getDepartamento(parseInt(id_departamento))

  res.json(result)
})

app.post('/departamentos', (req, res) => {

  console.log(req.body)

  res.send('ADICIONADO')
})



app.listen(3033, () => console.log('Executando servidor web...'))
