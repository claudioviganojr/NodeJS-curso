import express from 'express'
import { getDepartamentos, getDepartamento } from './departamentos.js'


const app = express()

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



app.listen(3033, () => console.log('Executando servidor web...'))
