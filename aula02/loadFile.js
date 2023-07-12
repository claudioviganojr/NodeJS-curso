import { readFile } from 'fs'

readFile('teste.txt', 'utf8', (err, data) => {
  console.log(data)
})

