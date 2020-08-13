const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.prototype) // undefined,
//pois o objeto tem só o atributo __proto__
//e não o prototype, só o Object tem o 
//atributo prototype.
console.log(ferrari.__proto__) // {}
/*Com o atributo __proto__ conseguimos acessar
quem é o protótipo do objeto, no caso, ferrari. 
Quem seria seu pai, o super. Portanto se 
procurarmos algum atributo que não tem em ferrari
ele irá procurar em seu protótipo, seu pai. O
protótipo de ferrari é um objeto vazio mas 
existe e está presente.*/

console.log(ferrari.__proto__ === Object.prototype)
//true
/*Portanto esse atributo que referencia o protótipo
de ferrari que não era um atributo padronizado,
especificado pela linguagem embora fosse 
suportado por muitos browsers mas sem documentação
agora sim está disponível tanto para o browser
quanto para o node. Esse Object.prototype é 
super de todo mundo, ou seja, é pai de todos os
objetos a não ser que alteremos isso, e ele não
é filho de ninguém*/

console.log(volvo.__proto__ === Object.prototype)
//true.

//Observação: Isso não acontece se estivermos
//criando objetos com a nossa função construtora
//veremos isso depois.

console.log(Object.prototype.__proto__)
//null. Isso ocorre pois ele não é filho de ninguém.

//Podemos fazer com que o prototype de um objeto
//aponte para nulo se quisermos.

console.log(Object.prototype.__proto__ === null)
//true

console.log(Object.__proto__ === Function.prototype)
// true

/*Como sabemos todo objeto é na verdade uma 
função, portanto, se criarmos uma função ela 
terá prototype também */
function MeuObjeto() {}
MeuObjeto.prototype = { a : 8 }
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)
/*{} MeuObjeto {}
Como podemos ver eles são objetos diferentes,
o {} do MeuObjeto é um objeto que foi criado a 
partir do momento que definimos a função.
Veremos o atributo prototype das funções 
depois. */
console.log(MeuObjeto.__proto__ === Function.prototype)
// true
console.log(Object.prototype === Function.prototype.__proto__)
// true