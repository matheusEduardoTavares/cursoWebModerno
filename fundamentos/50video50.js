let a = 3

global.b = 123
this.c = 456

console.log(this.a)
console.log(global.a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)

this.d = false
this.e = 'teste'

console.log(module.exports)

// module.exports = { c: 456, d: false, e: 'teste'}

// Criando uma variável sem var e let:
abc = 3 // não faça isso
console.log(global.abc)