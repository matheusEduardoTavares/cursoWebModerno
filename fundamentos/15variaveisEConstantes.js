var a = 3
let b = 4

var a = 30
// a = 30, funciona tanto dessa forma
// como na linha de cima, redeclarando var
b = 40
// let b = 40 daria erro

console.log(a, b)

a = 300
b = 400

console.log(a, b)

const c = 5
// c = 50 - daria erro pois é 1 constante
console.log(c)
