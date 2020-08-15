/*
Dentro da pasta form:
npm init -y
npm install --save express@4.16.3 -E
npm install body-parser@1.18.2 -E
*/
const express = require('express')
const bodyParser = require('body-parser')
//o body parser faz um parser no corpo do request, vai pegar
//esses dados e jogar dentro do request.body
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
//o urlencoded é o formato que vem os dados do formulário, então
//precisa por ele para fazer seu parser.

//no formulário colocamos a action o caminho para /usuarios com
//método post, e isso é refletido aqui:
app.post('/usuarios', (request, response) => {
    console.log(request.body)
    response.send('<h1>Parabéns</h1>')
})

app.listen(3003)
//a porta 3003 é a mesma que está na action do form.
/*
Se digitarmos no input Pedro e clicarmos no botão, o resultad
será:
{ nome: 'Pedro' }
Sendo a chave nome, o name que colocamos no input, e o Pedro
é o valor digitado no formulário.
*/