const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsistas? 
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
//aqui basicamente o resultado é o acumulador, o valor  da callback anterior, e o bolsista é true/false. Para saber se todos os alunos são bolsistas, precisamos ter o resultado da expressão verdadeiro para todos, ou seja, joão E maria E pedro E ana devem ser bolsistas para que no final seja verdadeiro. Por isso o retorno é uma expressão que o resultado e o valor atual devem dar verdadeiro. Se for verdadeiro ambos em todos os casos, no fim todos os alunos são bolsistas, e se tiver qualquer um false todo resto vira false.
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas)) // false

//Desafio 2: Algum aluno é bolsista? 
const algumBolsista = (resultado, bolsista) => resultado || bolsista

console.log(alunos.map(a => a.bolsista).reduce(algumBolsista)) // true
