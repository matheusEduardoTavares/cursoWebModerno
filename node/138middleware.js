// middleware pattern (chain of responsability)

//Definiremos algumas funções middlewares, alguns passos, depois criaremos a função que de fato irá iterar e fazer o processo de execução de cada um desses passos.

//Esse parâmetro ctx é um objeto que será passado de um passo para outro, de um middleware para outro. Esse objeto é importante pois é ele quem carrega os dados de um passo para o outro. A partir desse objeto será passado os dados entre as funções, os passos. Já que não há um acoplamento / dependência direta de uma função para outra é importante esse parâmetro; mas não necessariamente precisa ser um objeto, pode ser qualquer dado. O segundo parâmetro, next, é a função que quando chamada dispara o próximo passo na cadeia.
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next() // chamamos a função que chama o próximo passo
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

//Aqui não queremos que o middleware chame o próximo passo, então não precisamos do parâmetro next. No express a função middleware tem 3 parâmetros: a requisição, a resposta, e o next. Como só fizemos um exemplo colocamos apenas contexto como sendo o único objeto que é transmitido de uma função para outra, mas podia haver + que apenas um único objeto.
const passo3 = ctx => ctx.valor3 = 'mid3'

//Função que executará todos os middlewares e chamará o next quando a função for disparada:
const exec = (ctx, ...middlewares) => {
    //criaremos uma função que irá executar todos os índices do array middlewares, ou seja, vai percorrer ele e executar todas as funções na ordem, de acordo com o índice.
    const execPasso = indice => {
        //se o middlewares for true, ou seja, se ele foi definido, e se o índice ainda está dentro da quantidade de funções que devem ser executadas que estão dentro do array middleware, então chamaremos o middleware em determinado índice pegando a função, a executando passando o contexto e uma arrow function que será a função next que simplesmente chama essa função execPasso passando o indice atual + 1, para executar assim a próxima função. Trata-se de recursividade.
        middlewares && indice < middlewares.length && middlewares[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}
//o ... é um operador rest em que é possível passar vários valores, no caso funções para esse parâmetro middlewares e ele junta isso dentro de um array, então iremos ter um array chamado middlewares com todas as funções dentro dele.

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)