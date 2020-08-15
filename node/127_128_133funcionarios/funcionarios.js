//Embora um exemplo simples, tem aparência de um projeto real pois possui arquivos, o package.json e o lock. É uma pequena experiência de projeto no backend.
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')
//O axios é um client http, ele faz requisições para obter informações de algo que está remoto. O seguinte link está no servidor da cod3r, um servidor remoto, e queremos obter esse json dentro dessa URL para podermos obter algum trabalho em cima dele, então usaremos o axios para isso.

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios) // temos toda a lita de funcionários
}) // aqui basiamente estamos fazendo uma requisição da página do servidor, por isso get, passando aquela url que queremos, e quando essa requisição retornar, chamaremos o método then (falaremos depois oque está acontecendo por debaixo dos panos, que na verdade é um promisse) mas basicamente estamos obtendo a informação contida na URL que no caso é o JSON.