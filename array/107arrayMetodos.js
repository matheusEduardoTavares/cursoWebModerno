const pilotos = [ 'Vettel', 'Alonso', 'Raikkonen', 'Massa' ]

pilotos.pop() // remove o último elemento do array
console.log(pilotos) // [ 'Vettel', 'Alonso', 'Raikkonen' ]

pilotos.push('Verstappen')
console.log(pilotos) // [ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.shift() // é como o pop, mas o shift tira da primeira posição
console.log(pilotos) // [ 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.unshift('Hamilton') // Adiciona o elemento na primeira posição do array, é o contrário do shift.
console.log(pilotos) // [ 'Hamilton', 'Alonso', 'Raikkonen', 'Verstappen' ]

// splice vimos na aula passada:
// adicionando elementos:
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos) // [ 'Hamilton', 'Alonso', 'Bottas', 'Massa', 'Raikkonen', 'Verstappen' ]
// removendo elementos:
pilotos.splice(3, 1) // Elemento do índice 3 é removido
console.log(pilotos) // [ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ]

// O método slice retorna um novo array. No caso, retorna um novo array a partir do índice que passarmos como argumento:
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1) // [ 'Bottas', 'Raikkonen', 'Verstappen' ]
// Usando o slice de novo, mas pegando os elementos do array do índice que é o primeiro argumento até o índice que é o segundo argumento, no caso, o índice 4, mas lembrando que o índice 4 que é o último não entra, é sempre 1 a menos, então o algunsPilotos receberá o array referente ao array pilotos da posição 1 2 e 3.
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2) // [ 'Alonso', 'Bottas', 'Raikkonen' ]
