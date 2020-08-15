// Veremos alguns recursos adicionados
// aos objetos.

// ES8: Object.values / Object.entries
const obj = { a: 1, b: 2, c: 3}
console.log(Object.values(obj)) // [ 1, 2, 3 ]
console.log(Object.entries(obj))
//[ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
console.log(Object.keys(obj)) // o keys
//já tinha antes do ES8.
//[ 'a', 'b', 'c' ]

// Melhorias na Notação Literal (ES6)
const nome = 'Carla'
const pessoa = {
    nome,
    ola(){
        return 'Oi gente!'
    }
}
//por exemplo o nome já significa nome: nome,
//não precisamos repetir o : nome que já
//funciona.
//A função não precisamos colocar function
//e atribuir para uma chave, é só por o
//nome direto que essa será a chave.
console.log(pessoa.nome, pessoa.ola())
// Carla [Function: ola]

// No ES6 foi criado o recurso de Class,
//isso foi algo polêmico. Uma classe
//internamente é convertida para função.

class Animal {}
class Cachorro extends Animal {
    falar(){
        return 'Au au!'
    }
}
// a herança continua sendo por protótipo,
//mesmo usando o extends.

console.log(new Cachorro().falar())
// Au au!