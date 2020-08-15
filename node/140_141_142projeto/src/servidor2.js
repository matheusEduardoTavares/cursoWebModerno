const porta = 3003

const express = require('express')

const app = express()

const bancoDeDados = require('./bancoDeDados')

//app.use(express.json())

app.get('/produtos', (request, response, next) => {
    response.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (request, response, next) => {
    response.send(bancoDeDados.getProduto(request.params.id))
})

app.post('/produtos', (request, response, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: request.body.name,
        preco: request.body.preco
    })
    response.send(produto) // produto é convertido para JSON automaticamente
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})