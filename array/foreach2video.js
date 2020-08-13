//Esse é o forEach simulado:

Array.prototype.forEach2 = function(callback){
    for (let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}
//A função callback é passada para cada um dos elementos chamando o valor atual, o índice atual e o array completo. 
//Vimos então como implementarmos nosso próprio forEach.

//Nessa aula basicamente tentaremos simular o forEach para que os comandos abaixo funcionem:
const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})
//o print é o mesmo resultado da aula passada.
