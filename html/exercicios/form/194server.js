const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/usuarios', (request, response) => {
    console.log(request.body) // se tiver app.get e o action
    //GET do form pelo request.query pegamos ele. SE estiver
    //post pegamos pelo request.body
    console.log(request.query)
    response.send('<h1>Parabéns. Usuário Incluído!!!</h1>')
})

//Instalamos o nodemon com:
//npm i --save-dev nodemon
//configuramos o package.json, agora podemos executar a aplicação
//somente com npm start

app.post('/usuarios/:id', (request, response) => {
    console.log(request.params.id)
    console.log(request.body)
    response.send('<h1>Parabéns. Usuário Alterado!!!</h1>')
})

/*
Um exemplo será impresso:
3
{
  id: '3',
  nome: 'adfaf',
  senha: 'aflamf',
  bio: 'kmfakmfka',
  tipo: 'admin',
  ativo: 'on',
  estado: 'ba',
  interesses: 'python'
}
Sendo o 3 de fora o request.params.id que veio esse ID devido
ao formaction colocado :
<button formaction="http://localhost:3003/usuarios/3">Alterar</button>
E o id: '3' que veio dentro do objeto é o id pego do input
hidden que colocamos:
<input type="hidden" name="id" value="3">
*/

app.listen(3003)
