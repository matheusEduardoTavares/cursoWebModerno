/*
Faremos o mesmo exemplo da aula anterior, refatorando ele 
para usar promise. Em primeiro momento deixaremos o código
meio parecido para vermos que é possível fazer a mesma coisa
com promise, e depois faremos da forma certa, com + elegancia,
pois promise faz composição de forma bem mais interessante que
callbacks, pois o único jeito de compor callbacks é pondo uma
dentro da outra de forma aninhada, o que é ruim, chamado de
callback hell.
*/

const http = require('http')

//Primeiro não precisamos mais do parâmetro callback.
const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    
    //A parte do get colocamos dentro da Promise
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                //aqui no fim não usamos mais a callback
                try {
                    resolve(JSON.parse(resultado))
                }
                catch (e) {
                    reject(e)
                }
                /*Poderíamos ter o reject em outro local
                caso desse algum erro na requisição, mas
                por enquanto só estamos nos preocupando em
                tratar os dados que vem na resposta da
                requisição. */
            })
        })
    })
}

//Agora com promise refatoramos o código.
//Com encadeamento do then a partir da promise, conseguimos
//obter o mesmo resultado anterior.
// let nomes = []
// getTurma('A').then(alunos => {
//     nomes = nomes.concat(alunos.map(a => `A:${a.nome}`))
//     getTurma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(a => `B:${a.nome}`))
//         getTurma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(a => `C:${a.nome}`))
//             console.log(nomes)
//         })
//     })
// })

/*
Mas há formas muito mais interessantes de fazermos isso 
no lugar de fazer composição de várias chamadas, dessa forma:
Passamos várias promises para o método all da function 
Promise, e quando todas elas forem resolvidas, aí sim será
chamado a cadeia dos métodos then.
*/

//Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
//.then(x => console.log(x))

/*
O resultado de : .then(x => console.log(x))
é um array com 3 arrays dentro, sendo cada um desses arrays
internos contendo todos os objetos de cada um dos alunos, e 
cada array interno representa uma turma diferente.
*/

//ou seja, passamos todas promises que nós queríamos.
//Em uma única chamada, será chamada as 3 e ficará esperando
//todas as promises serem resolvidas / rejeitadas e a partir
//daí começamos a fazer composição de função.


// Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
// .then(turmas => [].concat(...turmas))
// .then(x => console.log(x))
/*
No then : .then(turmas => [].concat(...turmas))
será pego cada uma das turmas que representa um array com 
todos seus alunos, e tudo isso é juntado em um array só 
a partir do spread.
O resultado disso é que teremos um array com todos os alunos
de todas as turmas.
*/

//Agora para deixar o resultado igual queríamos:
// Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
//     .then(turmas => [].concat(...turmas))
//     .then(alunos => alunos.map(aluno => aluno.nome))
//     .then(nomes => console.log(nomes))

/*
Essa resolução é bem mais simples que as anteriores. Basicamente
passamos para o Promise.all todas as promises que queremos que
sejam resolvidas. Será esperado todas elas serem resolvidas
ou rejeitadas, e só depois que todas obtiverem resposta, 
que os then serão chamados.
REsumindo os then:
1°: Coloca todos alunos dentro de um array só pois antes
haviam 3 arrays, um de cada turma.
2°: Deixa dentro do array somente o nome dos alunos
3°: Imprime na tela o resultado, o array final.

Na estrutura anterior do promise que é encadeado, a chamada é
sequencial: faz a primeira, depois que ela chegar, faz a 
segunda, depois que chegar faz a terceira e última. Já nesse
caso melhorado não, faz todas, espera todas, para daí começar
a executar o passo a passo.
*/

//Por fim faremos um teste de pegar uma turma que não existe
//para assim ver cair no reject, no catch:
getTurma('D').catch(e => console.log(e.message))
//Unexpected token < in JSON at position 0

//Sempre que usamos promises é importante que façamos o 
//tratamento de erro pois um erro pode acontecer até mesmo
//na requisição por causa de motivos terceiros, portanto o 
//código ideal para solucionar isso é:
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))
//Ou seja, sempre colocar o catch.