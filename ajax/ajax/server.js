const bodyParser = require('body-parser')
const express = require('express')

const app = express()

// O express.static('.') serve para dizer que 
//dentro da pasta atual (.) , no qual o server.js
//está, sirva os arquivos estáticos (os arquivos 
//HTML, CSS, fontes, dados, e os arquivos JS). O
//. serve para indicar tudo no diretório em que
//está esse arquivo.
app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//Todas requisições irão ser trabalhadas primeiro 
//no que foi colocado nas linhas 10 11 e 12, pois 
//usamos o método use com apenas um parâmetro.
//Poderíamos ter passado 2 parâmetros: primeiro o 
//recurso que seria disposto pela URL e depois a 
//ação que seria executado, aí apenas nessa tal URL
//eles seriam executados, mas esse não foi o caso.

// app.get('/teste', (request, response) => response.send(new Date))

//Por padrão é mostrado o index.html

app.listen(8080, () => console.log('Executando...'))