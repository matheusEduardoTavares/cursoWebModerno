//aqui estará o express, o que é referente ao servidor web nosso.

//Precisamos quando executamos alguma aplicação que tem comunicação com rede declarar uma porta. Porta é um processo dentro do computador. Além do endereço IP que mostra onde está a máquina, para que + de 2 máquinas tentem se comunicar, é preciso mandar informação de uma máquina para outra, explicitando que tal informação será interpretada pela outra máquina em seu devido endereço IP e em uma devida porta. Dentro da máquina que vai receber a requisição, existem várias aplicações rodando na internet como por exemplo skype, browser, etc. Cada processo que se comunica com a rede precisa de uma porta e essa porta é única por processo. Então vamos definir que usaremos para esse nosso servidor a porta 3003. Logo, se tentarmos usar outra aplicação também nessa porta ao mesmo tempo dará problema, pois a porta já está sendo executada por 1 processo. A porta é como selecionamos qual processo atende tal requisição.
const porta = 3003 // portanto, se digitarmos no browser localhost:3003, quem atenderá essa requisição é nossa aplicação node executando esse arquivo servidor.js. 

//A porta 80 é a porta padrão quando fazemos requisição usando protocolo HTTP. Qualquer requisição no browser ele usa esse protocolo nessa porta 80.

const express = require('express')
const app = express()

//colocaremos nossos serviços em cima da variável app, que é a instanciação do express.

//a resposta será uma função middleware.
app.get('/produtos', (req, res, next) => {
    //o objeto que é enviado pela resposta através do método send é convertido para JSON automaticamente.
    res.send({nome: 'Notebok', preco: 123.45 })
})

//Outra forma de usar middleware dentro do express, mas para todas requisições:
/*app.use((req, res, next) => {
    //o objeto que é enviado pela resposta através do método send é convertido para JSON automaticamente.
    res.send({nome: 'Notebok', preco: 123.45 })
})
*/

//porta que ficará escutando a aplicação. A callback serve para mostrar no console que deu certo, conseguiu executar o servidor.
app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})

//Mesmo que seja da mesma aplicação, só conseguimos executar um único processo em uma determinada porta, dará erro de porta já usada caso tentemos executar um segundo ao mesmo tempo.

//Até podemos fazer várias aplicações ficarem acessíveis a partir de uma certa porta usando algumas técnicas como o proxy reverse, por exemplo. Temos um servidor na frente que consegue dispachar as requisições para várias aplicações que estão em portas diferentes. Cada servidor pode rodar uma linguagem, e a partir de um único servidor é possível acessar o que queremos, já que o servidor divide a requisição para as aplicações específicas baseada em um tipo de critério.