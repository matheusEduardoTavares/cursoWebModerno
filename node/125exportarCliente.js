const exportar = require('./125exportar')
console.log('--------')
console.log(exportar) // { publico: true } , ou seja, só aparece oque está dentro de module.exports.

//Portanto se formos querer exportar um objeto de forma literal só podemos usar o module.exports pois é ele quem realmente é exportado, ao atribuir um objeto literal ao this ou ao exports ele muda a sua referência de memória e acaba parando de influenciar no module.exports que é quem é exportado para outros arquivos como nesse caso. A forma correta é colocando direto no module.exports caso seja preciso adicionar direto um objeto literal.
//Se quisermos exportar o objeto vazio do module.exports que já vem por default atribuindo só um atributo ou função sem precisar usar um objeto de forma literal podemos usar o this ou o exports também.
//O this e o exports portanto são só 2 referências para o mesmo objeto que o module.exports (se não for mudado sua referência) aponta.