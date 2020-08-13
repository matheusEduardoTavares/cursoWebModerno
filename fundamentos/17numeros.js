const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
// 1.0 no JS como é tudo Number é inteiro
// Qualquer outro ponto flutuante que seja
// diferente de 0 aí sim será real
console.log(Number.isInteger(peso2))

const peso3 = Number('2.1')
console.log(Number.isInteger(peso3))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString())
console.log(media.toString(2)) // binario
console.log(typeof media)

const teste = 7.8910152459711428
console.log(teste.toFixed(3))
console.log(teste.toString(2))

//Number é 1 função do JS e number é 1
// tipo de dado:
console.log(typeof Number)