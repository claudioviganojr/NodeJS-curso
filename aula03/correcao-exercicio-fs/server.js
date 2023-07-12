import http from 'http'
import { readFile } from 'fs'

http.createServer((req,res) => {
  const { url } = req
  // Condicional Ternária
  const file = url === '/' ? 'index.htm' : `${url.replace('/','')}.htm`

  // Recebe um handler de 2 argumentos, onde error vai ser qualquer problema encontrado, 
  // caso contrario será null e data será o conteúdo do nosso arquivo lido.
  readFile(file, 'utf-8', (error, data) => {

    if (!error) {
      res.writeHead(200, { 'Content-type' : 'text/html; charset=utf-8' })
      res.write(data)
    } else {
      res.writeHead(404, { 'Content-type' : 'text/html; charset=utf-8' })
      res.write('<h1>Not found!</h1>')
    }
    
    res.end()
  })
}).listen(3000)