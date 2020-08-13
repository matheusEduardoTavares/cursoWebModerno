const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // [ 'nome', 'idade', 'peso' ]
console.log(Object.values(pessoa)) // [ 'Rebeca', 2, 13 ]
console.log(Object.entries(pessoa))// [ [ 'nome', 'Rebeca' ], [ 'idade', 2 ], [ 'peso', 13 ] ]

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

//Usando o operador destructuring:
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})
/*Ambos os Object.entries resultam em:
nome: Rebeca
idade: 2
peso: 13 */

//Definindo uma propriedade do objeto:
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})
/*Dessa forma podemos definir algumas
características de uma propriedade, por exemplo,
aquela propriedade pode ou não ser alterada, 
ficará visível ou não quando fizermos Object.keys
por exemplo. Colocamos o objeto que queremos 
definir a propriedade primeiro, depois entre 
aspas o nome da propriedade que estamos 
definindo, no caso dataNascimento e tem que ser
aspas se não o node irá entender que é um 
comando da linguagem e dará erro, daí no 
corpo passamos um objeto que terá todas as 
características dessa propriedade, por exemplo
se ela pode ser listada, ou seja, se o keys, 
o values e o entries irá imprimí-la (enumerable),
se a propriedade pode ser modificada (writable),
e a propriedade value atribui um valor para o
campo */

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento) // 01/01/2019
//como colocamos writable como false, o campo
//dataNascimento funciona como o freeze.

console.log(Object.keys(pessoa))
//[ 'nome', 'idade', 'peso', 'dataNascimento' ]
//se o enumerable fosse false o dataNascimento
//não apareceria

/*Ou seja, na hora de definir uma propriedade
usamos o Object.defineProperty pois assim 
a definimos mais completa, setando os parâmetros
de 1 propriedade para que tenhamos maior
flexibilidade. */

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)
/*Passamos como primeiro argumento o objeto que
receberá todos os outros objetos que serão 
passados como argumento. */
console.log(dest) // { a: 4, b: 2, c: 3 }
//o obj recebeu o dest no fim
/*Como o atributo a já existia ele é sobrescrito
pelo último valor do atributo a encontrado. Ou
seja, é pego o atributo de todos objetos que 
passarmos e seu respectivo valor e é adicionado
ao primeiro objeto do argumento. No fim o objeto
dest é a concatenação de todos atributos de
todos os objetos que passamos. */

Object.freeze(obj)
obj.c = 1234
console.log(obj) // devido ao freeze o atributo
//c do obj não mudou. { a: 4, b: 2, c: 3 }
