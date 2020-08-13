function MeuObjeto() {}
console.log(MeuObjeto.prototype) // MeuObjeto {}
//ou seja, é um objeto vazio

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

/*Quando instanciamos objetos a partir de uma
função, seu prototype (__proto__) aponta para
MeuObjeto.prototype e não para Object.prototype */
console.log(obj1.__proto__ === obj2.__proto__)
//true
/*Portanto todos objetos criados a partir da
mesma função construtora apontam para o mesmo
protótipo. */

console.log(MeuObjeto.prototype === obj1.__proto__)
//true

/*Sempre que criamos um objeto a partir do 
new Object ou a partir do objeto literal, seu
protótipo é o Object.prototype, diferente da 
função construtora que é o prototype da função.  */

//colocando 1 atributo dentro da função, ou
//seja, será visto pelos objetos instanciados
// já que é protótipo de todos objetos criados
//a partir dessa função
MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

/*Basicamente temos o atributo prototype para 
toda função; o atributo __proto__ para todos os
objetos, que é como um objeto referencia seu 
protótipo. Além das funções terem o prototype,
elas também possuem o atributo __proto__ ou seja
elas servem como pai mas também são filhas de
alguém, no caso, de Function.prototype. O 
Function portanto tem o atributo prototype, mas 
também tem o __proto__ que aponta para o 
Object.prototype. Ou seja, o Object.prototype é
pai do Function.prototype que é pai de qualquer
função criada, ou seja
o __proto__ de qualquer função criada é o
Function.prototype e o __proto__
do Function.prototype é o Object.prototype. Até
o Object.prototype tem o atributo __proto__, mas
ele aponta para null, ou seja, para ninguém*/

obj1.falar() // Bom dia! Meu nome é Anônimo!
//Como o obj1 não sobrescreveu a função falar
//nem o atributo nome então é pego o do protótipo

obj2.nome = 'Rafael'
obj2.falar() // Bom dia! Meu nome é Rafael!

//Podemos criar um objeto e fazer com que 
//seu protótipo deixe de ser o Object.prototype
//e passe a ser o MeuObjeto.prototype assim:
const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar() // Bom dia! Meu nome é Obj3!

// Resumindo (tudo resulta em true):
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ == Function.prototype)
console.log(Function.prototype.__proto__ == Object.prototype)
console.log(Object.prototype.__proto__ === null)

console.log(obj2.teste) // undefined
Object.prototype.teste = 'aff'
console.log(obj2.teste) // aff
Function.prototype.teste = 'abc'
console.log(obj2.teste) // aff
MeuObjeto.prototype.teste = 'xyz'
console.log(obj2.teste) // xyz
/*Oque acontece aqui é o seguinte: O 
objeto que é instancia da função MeuObjeto tem
como pai, protótipo o MeuObjeto.prototype e depois o 
Object.prototype SOMENTE. Já a função MeuObjeto
tem como prototype o Function.prototype e depois
o Function.prototype tem como protótipo o 
Object.prototype.*/
console.log(obj2.__proto__)
// MeuObjeto { nome: 'Anônimo', falar: [Function], teste: 'xyz' }
console.log((obj2.__proto__).__proto__)
//{ teste: 'aff' }
console.log((obj2.__proto__).__proto__ === Object.prototype)
//true
/*A ideia de adicionarmos atributos/métodos é termos 
métodos/atributos que serão compartilhados
por todos os objetos instanciados através da função. */
