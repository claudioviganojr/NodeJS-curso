import http from 'http'
import { readFile } from 'fs'
import currentDate from './currentDate.js'
import { myCity, myName } from './myName.js'

http.createServer((req, res) => {
  
  console.log(req.url)

  res.writeHead(200 , { 'Content-type': 'text/html; charset=utf-8' })

  if (req.url === '/') {
    // Logica - ela fica dentro apenas do BE
    const total = (25 + 36) / 2
    const frutas = ['banana', 'laranja', 'uva', 'melão']
    
    res.write(`<p>Bem vindo ${myName()}</p>`)
    res.write(`<p>Cidade ${myCity()}</p>`)
    res.write(`${currentDate().getFullYear()}!`)
    res.write('<hr/>')

    frutas.map(f => {
      res.write(`<p>${f}</p>`)
    })
  } else {
    res.write('Voce veio de outra URL')
    // Equivalente ao DIE do PHP
    res.destroy()
  }

  // SEMPRE precisa ter o END
  res.end()

}).listen(3033)