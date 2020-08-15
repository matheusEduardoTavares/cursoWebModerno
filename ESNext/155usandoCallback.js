/*
Precisamos obter 3 arquivos JSON de 3 turmas de 
alunos diferentes, nos seguintes links:
http://files.cod3r.com.br/curso-js/turmaA.json
http://files.cod3r.com.br/curso-js/turmaB.json
http://files.cod3r.com.br/curso-js/turmaC.json

A ideia é extrair apenas o nome dos alunos nos 3 
arquivos JSON. Nessa aula para obter o resultado
utilizaremos callbacks e na próxima aula
iremos refatorar isso para promises para
entendermos o porque foi motivado a 
criação dos promises e porque o promise favorece
melhor a composição.

Nesse exercício não utilizaremos nada novo do 
ECMAScript e veremos que o uso de callbacks 
não é a melhor solução para isso, e sim 
as promises.
*/

// sem promise...
const http = require('http')
//o http é um módulo do node para fazer isso
//tem o axios tb que é baseado em promise

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''

        res.on('data', dados => {
            resultado += dados
        })

        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}
/*
A função getTurma recebe como parâmetro a letra para saber
se é turma A, B ou C, e uma callback. O método get do http
é para fazermos uma requisição get a denominada url, e temos
outra função callback que é o res, que é a resposta da 
requisição e é a partir dela que começaremos a receber os
dados. Não dá para receber o dado inteiro, 
não recebemos o dado inteiro e precisamos fazer
seu controle manual pois essa resposta será uma stream
de dados, os dados não chegarão todos de uma vez, mas de 
forma parcial. Pegando os dados parciais vamos concatenando
e pegando o dado completo. O evento de resposta on data, seria
essa parte dos dados, e cada um deles que vai chegando nós
vamos concatenando na variável resultado. Quando os dados
terminarem de chegar, o evento on end é disparado, chamando
sua callback. Fazemos parse do resultado pois sabemos que
ele será um JSON, então fizemos uma solução para essa nossa
necessidade específica, então não é muito flexível.
Essa função não usa promise.
*/

let nomes = []
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A:${a.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B:${a.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C:${a.nome}`))
            console.log(nomes)
        })
    })
})
/*
Isso é chamado de callback hell, quando temos uma callback 
dentro de outra callback, tornando complicado de ler e o código
mais estranho. Com promise não precisamos fazer dessa forma,
o resultado fica bem mais interessante, pois conseguimos
compor de forma muito mais simples com promise. Na próxima
aula resolveremos esse mesmo exemplo com promise.
*/