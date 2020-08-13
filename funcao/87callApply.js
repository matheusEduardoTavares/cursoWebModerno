function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

/*A diferença entre o call e o apply é a 
forma como passamos os parâmetros na hora de
invocar a função a partir desses 2 métodos, 
por isso usamos 2 parâmetros na função.*/

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco // cria 1 atributo chamado getPreco
    //e atribui a função getPreco a ela
}

console.log(getPreco()) //NaN. O this.preco e
//this.desc no contexto global não está definido


global.preco = 20 // sem o global. também funciona pois vai direto pro global
global.desc = 0.1
console.log(getPreco()) //R$ 18

console.log(produto.getPreco()) // R$ 3900.65

/*Usando o Call: */
const carro = { preco: 49990, desc: 0.20}
//chamamos a função getPreco passando o contexto
//em que vai ser executado
console.log(getPreco.call(carro)) // o call chama a função passando o contexto carro

//é a mesma ideia para o Apply:
console.log(getPreco.apply(carro)) // o apply também chama a funçaõ e passamos o contexto que queremos

/*A diferença em chamar o call ou o apply é 
justamente a passagem dos parâmetros. */

console.log(getPreco.call(carro, 0.17, '$')) /*No call passamos
cada um dos parâmetros que será passado na
função. O primeiro parâmetro sempre é o 
contexto que pode estar nulo, pode ser o carro,
o global, o produto, etc, qualquer 1. Aqui no
caso com o call já podemos passar primeiro o
contexto e depois os parâmetros que irão para
função. */

console.log(getPreco.apply(carro, [0.17, "$"])) /*No apply ao
invés de colocarmos todos os parâmetros
diretamente no apply passamos os parâmetros
dentro de um array. Então primeiro passamos o
objeto que será usado como contexto de execução
e depois o array c/ todos os parâmetros dentro
desse array. Sem o array no apply passando os
parâmetros dá erro*/

//Funcionaria:
this.preco = 4589
this.desc = 0.15
console.log(getPreco.apply(module.exports))
console.log(getPreco.apply(global))

/*Portanto podemos chamar as funções:
- Diretamente
- Chamando ela a partir de um objeto como no
produto.getPreco()
- Usando o call (s/ array p/ parâmetros)
- Usando o apply (tem array p/ parâmetros)*/
