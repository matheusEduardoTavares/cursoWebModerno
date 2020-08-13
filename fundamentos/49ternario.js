// Podemos colocar o operador ternário em qualquer lugar. Seja uma função:
const resultado = nota => nota >=7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))

// Seja uma constante/variável:
const nota = 8
const status = nota >= 7 ? 'Aprovado' : 'Reprovado'
console.log(status)
