const repository = require('./repository')

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5000

app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.listen(port, () => {
  console.log(`Servidor rodando na porta de conexão ${port}.`)
})

app.get('/', (request, response) => {
  response.json({ aplicacao: 'CRUD PESSOAS' })
})

app.get('/pessoas', repository.getParceiros)
app.get('/pessoas/:id', repository.getParceirosById)
app.post('/pessoas', repository.createParceiros)
app.put('/pessoas/:id', repository.updateParceiros)
app.delete('/pessoas/:id', repository.deleteParceiros)
