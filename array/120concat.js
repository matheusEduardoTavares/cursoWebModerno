const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos)
console.log(todos, filhas, filhos) // [ 'Ualeskah', 'Cibalena', 'Uoxiton', 'Uesclei' ] [ 'Ualeskah', 'Cibalena' ] [ 'Uoxiton', 'Uesclei' ]

//Além de concatenar os 2 arrays adicionaremos + elementos:
const todos2 = filhas.concat(filhos, 'Fulano')
console.log(todos2) // [ 'Ualeskah', 'Cibalena', 'Uoxiton', 'Uesclei', 'Fulano' ]
//Podemos passar quantos parâmetros quisermos, e eles podem ser arrays ou elementos. No fim o resultado será 1 array com a concatenação de todos elementos / arrays.

//Podemos chamar o concat para um array vazio de [] pois isso já é um objeto e portanto tem a notação ponto. Colocaremos uma matriz para vermos oque acontece na concatenação:
console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))
// [ 1, 2, 3, 4, 5, [ 6, 7 ] ]
//Portanto os elementos dos arrays são retirados e colocados. No caso como havia uma matriz, tirou eles do vetor restando apenas 1 dimensão ficando então o array [6, 7] que era uma matriz dentro do array final em forma de array.

console.log(['a', 'b'].concat([1, 2], [3, 4], 5, [[6, 7]])) // [ 'a', 'b', 1, 2, 3, 4, 5, [ 6, 7 ] ]

const teste = [2, 3]
const teste2 = [3, 4]
const teste3 = teste.concat(teste2)
console.log(teste3) // [ 2, 3, 3, 4 ] ou seja, repete os elementos iguais.
//Sempre é gerado um novo array que é o resultado da concatenação mas os arrays originais não são mexidos como vimos no primeiro console.log .
