console.log(this === global) // false
console.log(this === module) // false

console.log(this === module.exports) // true
console.log(this === exports) // true

//quando usamos o this dentro de uma função, ele se refere ao global, então ele deixa de apontar para o exports.
function logThis (){
    console.log('Dentro de uma função...')
    console.log(this === exports) // false
    console.log(this === module.exports) // false
    console.log(this === global) // true

    this.perigo = '...'
}

logThis()
//Resumo: o this dentro de função aponta para o global. Fora de função (dentro de um módulo) aponta para o module.exports / exports.
console.log(perigo) // ... , se o this estivesse fora, esse perigo seria exportado, ou seja, está sendo transformado em algo público, um atributo que será visível fora do módulo.
console.log(global.perigo)