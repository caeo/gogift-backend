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

app.get('/parceiro', repository.getParceiro)
app.get('/parceiro/:id', repository.getParceiroById)
app.post('/parceiro', repository.createParceiro)
app.put('/parceiro/:id', repository.updateParceiro)
app.delete('/parceiro/:id', repository.deleteParceiro)

app.get('/cliente', repository.getCliente)
app.get('/cliente/:id', repository.getClienteById)
app.post('/cliente', repository.createCliente)
app.put('/cliente/:id', repository.updateCliente)
app.delete('/cliente/:id', repository.deleteCliente)

app.get('/produto', repository.getProduto)
app.get('/produto/:id', repository.getProdutoById)
app.post('/produto', repository.createProduto)
app.put('/produto/:id', repository.updateProduto)
app.delete('/produto/:id', repository.deleteProduto)
