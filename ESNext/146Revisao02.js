//Veremos função arrow (ES6) e Parametro
//DEfault (ES6) e o operador rest (ES6)

//função arrow (ES6)
const soma = (a, b) => a + b
console.log(soma(2, 3)) // 5

// Arrow Function (this)
const lexico1 = () => console.log(this === exports)
lexico1() // true
const lexico2 = lexico1.bind({})
//o this não varia, é sempre o do seu 
//contexto léxico. SE fosse uma função
//normal o lexico2 daria false pois o 
//this seria o objeto {} no bind, e 
//não o exports.
lexico2() // true

// Parâmetro Default
function log(texto = 'Node') {
    console.log(texto)
}
log() // Node
log(null) // null
log('abc') // abc

// operador rest
/*Esse operador tem dois nomes: spread
(espalhar) e rest (agrupar). No contexto
da função, o nome certo dele é rest pois
temos parâmetros variáveis e esses 
parâmetros serão agrupados em um array
internamente dentro da função. Mas quando
usamos ele para objetos / arrays o chamamos
de spread.*/

/*
//Exemplo fora da aula:
const somador = (total, numero) => total + numero
function total(...numeros) {
    return numeros.reduce(somador)
}
console.log(total(5, 2, 3)) // 10
*/
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5)) // 14