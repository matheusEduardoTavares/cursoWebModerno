/*
Outra estrutura adicionada foi o set
, uma estrutura de conjunto, não
indexada e que não aceita repetição.
Arrays são indexados por índices 
numéricos, objetos são indexados com
chaves (identificadores), já o set
é um conjunto não indexado e que não
aceita repetição.
*/
const times = new Set()
times.add('Vasco')
times.add('São Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')
//Adicionamos vasco 2 vezes, não dá
//erro mas só um é realmente adicionado
//na estrutura
console.log(times)
//Set(5) { 'Vasco', 'São Paulo', 'Palmeiras', 'Corinthians', 'Flamengo' }
console.log(times.size) //5
console.log(times.has('vasco')) //false
//false pois adicionamos Vasco e não
//vasco.
console.log(times.has('Vasco')) //true

times.delete('Flamengo')

console.log(times.has('Flamengo')) // false

console.log(times)
//Set(4) { 'Vasco', 'São Paulo', 'Palmeiras', 'Corinthians' }

//Podemos criar um set já adicionando
//itens, bastando passá-los como 
//array para o construtor.
const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)
//Set(3) { 'Raquel', 'Lucas', 'Julia' }
//Como repetimos Lucas ele apareceu 1
//vez só.