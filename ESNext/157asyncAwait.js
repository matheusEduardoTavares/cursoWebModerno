/*
Outro recurso importante que surgiu no ES8, foi o async await.
A ideia é transformar um código assíncrono em algo que parece
síncrono. O objetivo é simplificar o uso de código assíncrono.

Veremos + recursos de ESNext mais para frente, o principal 
já foi visto. Veremos depois o que faltou como singleton e
generators.
*/

//utilizaremos a função getTurma da aula passada em que 
//utilizamos promise e em cima dessa função iremos ver como
//a partir dessa função assincrona conseguimos trabalhar de
//uma forma muito mais síncrona.
//O objetivo do async await é simplificar o uso de promises,
//tanto que ele é usado junto com promise com objetivo de
//tentar deixar o código parecendo + síncrono (ES8)

const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
            res.on('data', dados => {
                resultado += dados
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                }
                catch (e) {
                    reject(e)
                }
            })
        })
    })
}

//Criamos uma função e marcamos ela com a palavra async.
//await só funciona dentro de funções marcadas com async.
//pode ser :
//async function obterAlunos () {
// ou :
let obterAlunos = async () => {
    //como a arrow function foi marcada com async (podia ser
    //1 função normal tb), podemos usar o await aqui dentro do
    //corpo dessa função.
    /*
    Sempre que tivermos lidando com uma função que retorna uma
    promise podemos simplesmente colocar await e essa função
    só vai para o próximo passo se ela foi resolvida ou rejeitada
    */
   const ta = await getTurma('A')
   //não nos preocupamos com o then, simplesmente adicionamos
   //o resultado a constante, no caso, ta.
   //A forma de trabalho foi muito mais síncrona. Ao invés
   //de usar o then e trabalhar com os dados que vem no then,
   //usamos o retorno com o await e o resultado é atribuído
   //a variável, e só continua a execução do programa depois
   //que o resultado for atribuído.
   const tb = await getTurma('B')
   const tc = await getTurma('C')
   //O uso da promise foi simplificado, pois embora pareça
   //trabalhar sincronamente, trabalha de forma assíncrona
   return [].concat(ta, tb, tc)
   //retornamos um array com todas as turmas juntas
}
/*
Quando temos uma função async, por mais que estejamos 
retornando um array, será retornado um objeto do tipo async
function, e em cima desse async function nós usamos a 
função then para executar.
*/

obterAlunos().then(alunos => alunos.map(a => a.nome))
.then(nomes => console.log(nomes))
//dá o mesmo resultado do código da aula passada.