const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    },{
        nome: 'Ana',
        nota: 9.3
    }]
},  {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

//Nossa ideia é extrair a nota de todos os alunos independente das turmas. No fim devemos ter: [ 8.1, 9.3, 8.9, 7.3 ]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1) // [ [ 8.1, 9.3 ], [ 8.9, 7.3 ] ]
// Ou seja não temos um único array com todas as notas, temos um array que possuem arrays para as notas de cada turma. Para evitar isso podemos fazer uso do flatMap que é algo que não vem na linguagem por padrão, mas basicamente é um map associado com concat. Com isso em vez de termos um array de arrays poderemos ter um único array com todas as notas de todos os alunos de todas as turmas.
//Esse é o resultado que queremos:
console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ]))
//[ 8.1, 9.3, 8.9, 7.3 ], ou seja concatenamos o resultado de cada map com um array vazio.

//Para tal faremos:
Array.prototype.flatMap = function (callback){
    return Array.prototype.concat.apply([], this.map(callback))
}
//Aqui basicamente retornamos o resultado da função concat que tem como contexto um array vazio, e esse array vazio será concatenado com os arrays resultantes de cada map executado por turma. É exatamente oque fizemos no console.log logo acima, o resultado do map concatenamos com um array vazio e no final teremos o mesmo resultado. O nome flatMap realmente existe: é a ideia de termos 1 matriz e achatarmos isso transformando o resultado em um único array. É uma função muito conhecida para quem trabalha com paradigma funcional.

console.log('----------')
const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2) //[ 8.1, 9.3, 8.9, 7.3 ]
