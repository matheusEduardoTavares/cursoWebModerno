console.log(module.exports) // { }
console.log(module.exports === this) // true
console.log(module.exports === exports) // true
//O module.exports é uma referência tanto para o this quanto para o exports, então as 3 formas são formas de exportar.

this.a = 1; // o a é visível fora do arquivo
exports.b = 2 // o b é visível fora do arquivo
module.exports.c = 3 // o c é visível fora do arquivo

//1 observação:
exports = null
console.log(module.exports) // { a: 1, b: 2, c: 3 }
//mesmo atribuindo o null para o exports, o module.exports continua apontando para o que setamos acima. Isso ocorre pois o exports é uma outra variável que aponta para o mesmo objeto, então tanto faz adicionar a partir do exports ou do this ou do module.exports pois estaremos apontando para a mesma referência na memória. Mas no final das contas, só é retornado, exportado a partir de um módulo o module.exports. Então se fizermos:

exports = { 
    nome: 'Teste'
} // esse objeto n é retornado pois mudamos a referência de exports para um outro objeto, mas quem na verdade é retornado é o module.exports.

console.log(module.exports) // { a: 1, b: 2, c: 3 }

module.exports = { publico: true }
