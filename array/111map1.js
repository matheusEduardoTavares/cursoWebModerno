const nums = [1, 2, 3, 4, 5]

//Array de nums dobrado:
//O map é um for com propósito, seu propósito é transformar cada elemento de 1 array. Ele possui um for interno para tal. Passamos uma callback para o map. Essa callback pode receber 3 parâmetros: o valor atual, o índice e o array completo.
let resultado = nums.map(function (e) {
    //aqui dentro transformamos, mapeamos o elemento que queremos que gere no final. No caso é o dobro do elemento:
    return e * 2;
})

console.log(resultado) // [ 2, 4, 6, 8, 10 ]

//OBS: O map não transforma o array atual, gera um novo array. Então o array de nums continua o valor inicial:
console.log(nums) // [ 1, 2, 3, 4, 5 ]

//Função para somar o valor de cada elemento + 10
const soma10 = e => e + 10 // no caso da arrow function o return já é implícito então não precisa. Mas se passarmos uma função normal sem o return, o resultado do novo array será que todos seus elementos estarão undefined.

const test = nums.map(function (e) {})
console.log(test) // [ undefined, undefined, undefined, undefined, undefined ]

const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

//Podemos fazer maps suscetivos:
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
//O resultado de cada map é um array então podemos chamar o map logo depois novamente.

console.log(resultado) //[ 'R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 45,00' ] , os resultados são strings pois o paraDinheiro coloca ele dentro de uma template string.
