const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

const bolsas = alunos.map(bolsista => bolsista.bolsista)

// Desafio 1: Todos os alunos são bolsistas? 
const resultado = bolsas.reduce(function (acumulador, atual){
    return (atual) ? acumulador + 1 : 0;
})

if (resultado == bolsas.length){
    console.log('Todos alunos são bolsistas')
}
else{
    console.log('Não são todos alunos que são bolsistas')
}

// Desafio 2: Algum aluno é bolsista? 
const resultado2 = bolsas.reduce(function (acumulador, atual){
    return (atual) ? acumulador + 1 : acumulador;
})

if (resultado > 0){
    console.log('Algum(ns) aluno(s) é(são) bolsista(s)')
}
else{
    console.log('Nenhum aluno é bolsista')
}
