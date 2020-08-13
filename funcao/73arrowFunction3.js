let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(global) // >> true
//comparaComThis(module.exports) >> false
//console.log(module.exports === this) >> true
//console.log(global === this) >> false

comparaComThis(this) // false pois esse this de argumento é o module.exports não o global
console.log(this === module.exports) // true

const obj = {}
comparaComThis = comparaComThis.bind(obj)
//com isso o comparaComThis tem como this o obj 
//já que foi amarrado a ele
comparaComThis(global) // false
//portanto o this não é mais o global.
comparaComThis(obj) // true
console.log('------------------------------')

//Agora veremos esse comportamento na arrow function:
let comparaComThisArrow = param => console.log(this === param)
//essa função comapraComThisArrow foi definida dentro
//de 1 módulo do node. Cada arquivo do node 
//representa 1 módulo e escrevemos a função diretamente
//dentro de 1 arquivo, ele foi escrito no contexto
//léxico dentro do módulo. No caso o this então faz
//referência ao módulo em que o comparaComThisArrow
//está dentro
comparaComThisArrow(global) // false
comparaComThisArrow(module.exports) // true
//o module.exports é o módulo em que é armazenado a
//função comapraComThisArrow portanto o this faz
//referência a ele e não muda por ser arrow
//function.

comparaComThisArrow(this) // true pois ambos são o module.exports

//Podemos acessar o module.exports diretamente de 1
//arquivo do node usando o this

console.log('-------------------------')

//agora usaremos o bind dentro da função arrow para
//VER SE muda a referência do this dentro da arrow function

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // false
//A arrow function não muda o local que o this aponta
//independente de usarmos o bind. Não há como mudar
//para onde o this da arrow function aponta para o
//objeto no qual a função foi escrita.

comparaComThisArrow(module.exports) // true

//essa é outra vantagem da arrow function, o this dela
//jamais variará, além da arrow function ser menor.
