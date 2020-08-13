const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai)
/*Assim é criado um objeto novo tendo como 
protótipo o objeto pai que passamos como parâmetro
, sem precisa do setPrototypeOf ou do __proto__
*/

//sem essa linha abaixo na hora que printarmos
//o keys do filha 1 não vai aparecer nome
filha1.nome = 'Ana'
console.log(filha1.corCabelo) // preto

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})
/*O segundo parâmetro é um objeto em que vamos
por todos os atributos que queremos adicionar no
objeto filha2 que será criado, inclusive podemos
por as características desse atributo, se ele 
é writable, se é final, se estará congelado ou
não e coisas do tipo. Colocar o writable false
o deixa congelado pois não pode ser alterado. Se
o enumerable estiver false o for in também não
mostra esse atributo. Se o enumerable estivesse
false na hora e printarmos o keys do filha2 não
irá aparecer o nome*/

console.log(filha2.nome) // Bia
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)
// Bia tem cabelo preto, como o writable é false
// não mudou de Bia para Carla

console.log(Object.keys(filha1)) // nome
console.log(Object.keys(filha2)) // nome

for (let key in filha2){
    console.log(key)
}
/*
nome
corCabelo
*/

//método que verifica se o objeto tem a
//propriedade ou se é do seu prototype:
for (let key in filha2) {
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`)
}
/*
nome
Por herança: corCabelo
Ou seja, o nome pertence ao objeto filha2 pois
fizemos filha2.nome sobrescrevendo oque tinha
vindo do prototype, enquanto o corCabelo vem
do prototype.
 */