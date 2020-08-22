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

// Agora iremos fazer um exemplo de upload usando o
//XMLHttpRequest, então começaremos importando o 
//multer que instalamos via npm, e ele servirá para
//interpretar o formulário que veio o arquivo do 
//upload:

const multer = require('multer')

// Configuração que não seria necessária, mas que é
//muito usada:
//a função diskStorage recebe um objeto oque serve
//para configurar, personalizar tanto a pasta que 
//vamos salvar os arquivos, como também serve para
//personalizar o nome do arquivo no momento de salvar
//ele.
//No caso de upload de arquivos, não é comum salvarmos
//os arquivos dentro do banco de dados, e sim dentro
//de pastas e mudamos o nome desse arquivo para não
//ter problema de ter 2 arquivos com mesmo nome, pois
//um pode sobrescrever o outro. Para evitar esse 
//problema pode ser colocado a data atual como 
//prefixo do arquivo.
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        // O segundo parâmetro é onde iremos querer
        //armazenar o arquivo que no caso será na
        //pasta upload.
        callback(null, './upload')
    },
    // filename é a função chamada no momento que 
    //será escolhido o nome do arquivo, sendo o 
    //segundo parâmetro o nome dado no arquivo.
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

//O upload é quem irá interpretar o upload que vai
//vir a partir da requisição via AJAX lá no servidor.
//arquivo é o nome de como virá o arquivo quando
//for feito o upload.
const upload = multer({ storage }).single('arquivo')

app.post('/upload', (request, response) => {
    upload(request, response, err => {
        if (err){
            return response.end('Ocorreu um erro.')
        }

        response.end('Concluído com sucesso.')
    })
})

app.post('/formulario', (req, res) => {
    // Aqui precisamos do body parser para ele 
    //interpretar os dados obtidos da requisição lá
    //no frontend.
    return res.send({
        ...req.body,
        id: 7
    })
})

app.get('/parOuImpar', (req, res) => {
    // Dentro do express existe algumas formas de 
    //obtermos os dados do frontend e uma dessas 
    //formas é usar o req.body
    // Outra forma é o req.query que vem na URL em
    //?[atributos], ex: /index?id=5
    // E por fim temos o req.params, que também vem
    //na url mas vem um único valor , ex: /index/:id
    //ou com mais de um valor: /index/:id/:password
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8080, () => console.log('Executando...'))