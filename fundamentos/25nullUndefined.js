let valor // não inicializada
console.log(valor)

// console.log(valor2) daria erro pois
//essa variável n foi declarada no programa

valor = null // ausência de valor
console.log(valor)

//console.log(valor.toString()) dá erro

const produto = {}
console.log(produto.preco)
//console.log(produto.preco.a) dá erro
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco é + recomendável fazer isso que atribuir undefined p/ 1 atributo
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)