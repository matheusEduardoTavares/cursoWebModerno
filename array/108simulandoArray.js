const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' }
console.log(quaseArray) // { '0': 'Rafael', '1': 'Ana', '2': 'Bia' }

/*Agora criaemos o método toString dentro do objeto 
quaseArray e colocaremos esse método para não ser listado, criaremos o toString para simular a impressão no console como se fosse o array:*/
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0]) // Rafael

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)// [ 'Rafael', 'Ana', 'Bia' ] [ 'Rafael', 'Ana', 'Bia' ]
/*Claro que o array tem muitas outras estruturas internas e que não fazem sentido tentarmos simular no objeto, mas só para termos uma ideia de como a partir do objeto o array é criado. */
