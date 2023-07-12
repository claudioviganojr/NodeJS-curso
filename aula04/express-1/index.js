import express from 'express'

const app = express()
app.use(express.static('public'))

app.get('/', (req, res) => {
  const dia = 'Terça'
  res.send(`Bem vindos - ${dia}!`)
})

app.post('/', (req, res) => res.send('Recebi um POST'))


app.get('/clientes', (req, res) => res.send('Clientes'))

//https://api.github.com/users/csfeijo/repos
//https://api.github.com/users/fronzinha/repos
//http://localhost:3033/users/romario/repos
//http://localhost:3033/users/csfeijo/repos/10

app.get('/users/:usuario/repos/:limit', (req, res) => {
  const { usuario, limit } = req.params

  res.send(`Funciona - ${usuario} - ${limit}`)
})

app.get('/departamentos', (req, res) => {

  res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' })

  res.write('teste 1')
  res.write('teste 2')
  res.write('teste 3')
  res.write('teste 4')
  
  res.end()
})







// Levanta o servidor http
app.listen(3033, () => console.log('Executando servidor web...'))
