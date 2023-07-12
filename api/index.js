import express from 'express'
import bodyParser from 'body-parser'
import departamentosRoutes from './src/routes/departamentosRoutes.js'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( { extended: true } ))

departamentosRoutes(app)

app.get('/', (req, res) => {
  res.send('Welcome to API')
})

app.listen(80, () => {
  console.log('Servidor sendo executado...')
})


