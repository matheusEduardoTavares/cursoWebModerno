const porta = 3003

const express = require('express')

const app = express()

const bodyParser = require('body-parser')

const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true })) 
// o use será
//aplicado para todas requisições como já vimos. O urlencoded
//é uma função middleware e ele retorna uma função 
//middlware. Essa função middleware que estamos invocando
//para o use irá fazer um parse no body da requisição e 
//terá como resultado outra função middleware e assim o
//body que era JSON irá ser convertido para objeto. O 
//extended true é um objeto que precisa ser passado. Para
//qualquer requisição que façamos usando o express, 
//obrigatoriamente vai passar por esse middleware e se no
//corpo da requisição tiver 1 padrão chamado urlencoded, 
//será feito um parse do JSON para objeto do body. O 
//middleware é o bodyParser. Tanto no postman quanto no
//insomnia temos a opção de urlencoded para poder fazer
//uso desse artifício.

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) 
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco,
        id: Number.parseInt(req.params.id)
    })
    res.send(produto) 
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) 
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})