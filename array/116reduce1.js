const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

//Usaremos o reduce para somar a nota de todos os alunos.

console.log(alunos.map(a => a.nota)) //[ 7.3, 9.2, 9.8, 8.7 ]

//Internamente dentro do reduce tem um for para percorrer cada um dos elementos para chamar seu callback sempre passando o acumulador que é o resultado da callback anterior.
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})
//7.3 9.2
//16.5 9.8
//26.3 8.7
//Portanto com o map temos um array com todas as notas dos alunos, como não passamos um valor inicial para a função reduce (para o reduce podemos passar 2 argumentos: a callback que é obrigatória e o valorInicial que é opcional) então foi passado o elemento de índice 0 e o elemento de índice 1 para a callback, portanto, o acumulador recebeu 7.3 e o atual recebeu 9.2. Daí foi retornado a soma desses dois que dá 16.5. O 16.5 na segunda vez que a função foi executada, na segunda iteração é passado para o acumulador, pois é o resultado da soma de 7.3 com 9.2, o resultado da callback anterior, enquanto o atual recebe o elemento de índice 2 (9.8) já que o elemento de índice 0 e 1 já foram usados aí é feito a soma de 16.5 com 9.8 e o resultado (26.3) passado para a próxima iteração no acumulador e o atual passa a ser o elemento de índice 3 (próximo elemento) e também último elemento no caso, aí é retornado a soma dos 2 e acaba as iterações portanto o resultado recebe este resultado final que é 35.

console.log(resultado) // 35

//O mesmo exercício mas com um valor inicial de 10:
console.log('----------------------')

const resultado2 = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 10)
/*
10 7.3
17.3 9.2
26.5 9.8
36.3 8.7 */

console.log(resultado2) //45

//Se no lugar do acumulador tivermos um array não tem problema, é só irmos adicionando os elementos no array a cada iteração. No nosso exemplo é um número, mas poderia ser array, objeto, etc, oque quisermos, portanto o reduce é + flexível que o filter e o map.
