const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

//O objetivo é calcularmos a média desses alunos:

// Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length) //8.55

// Declarativa
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
//O reduce tem também a ideia de agregar os valores, seja um único valor (soma) ou em um array resultante ou um objeto.
console.log(total2 / alunos.length) // 8.55

/*Embora tenhamos praticamente a mesma quantidade de linhas em ambas abordagens para esse exemplo, a abordagem declarativa é muito mais interessante por diversos fatores, como:
1 - A forma imperativa, todo o código serve para uma coisa só, é uma coisa só, tá fazendo tudo ao mesmo tempo: extraindo e somando a nota do aluno tudo ao mesmo tempo, ou seja, temos bem menos reuso no imperativo que no declarativo. Na forma declarativa, as funções podem ser reutilizadas em outros contextos como no caso da função soma e getNota, sendo que a definimos uma única vez e podemos usá-las em vários locais diferentes.
Resumindo: O imperativo é bem menos flexível porque deve ser seguido à risca a forma de fazer. A diferença não é oque tem que ser feito, e sim COMO será feito. Na maneira imperativa o como, os detalhes, o passo a passo de como é feito é ainda + importante do que o que deve ser feito. Na abordagem declarativa é o oposto, só dizemos oque tem que ser feito e internamente as coisas vão sendo feitas.
No caso da abordagem declarativa, que usamos o map e o reduce para chegarmos no resultado, não importa que dentro desses métodos há um for interno que irá percorrer o array, isso é um detalhe de implementação interno de cada uma das funções, mas não nos importamos com esses detalhes internos, só nos importamos com o resultado que é a média da nota, e a junção dessas 2 funções com as funções getNota e soma que criamos nos dá esse resultado, independente de todos os detalhes internos de cada função que é usada. 
Com a abordagem declarativa, promovemos o reuso com funções pequenas bastante especialistas, a forma de escrever o código acaba ficando mais claro, por exemplo o que nos dá o resultado é :
const total2 = alunos.map(getNota).reduce(soma)
Esse código basicamente quer dizer: pegue alunos, mapeie apenas as suas notas, e reduza somando tudo para no final depois que obtemos o resultado, pegamos esse resultado e dividimos pela quantidade de alunos para dar a média da turma.
*/

//Exercício: Esse comando SQL é uma abordagem + imperativa ou declarativa ?
// select codigo, nome, email from clientes where ativo = 1;
//Resposta, aqui, estamos mais preocupado nesse código em dizer como o banco de dados vai percorrer os dados e pegar essas informações para nós (imperativa) ou dizer o que queremos obter a partir desse comando SQL (declarativo).
//Não estamos preocupados em como o banco vai percorrer a tabela, se ele vai fazer um fullscan, se vai percorrer a partir de um índice, de cima para baixo, etc, não sabemos isso. O como o banco vai fazer isso não importa, estamos mais preocupados com oque será feito, então o SQL é uma linguagem declarativa, estamos preocupados em dizer oque queremos doque como o banco vai fazer para obter os dados. 

//Da mesma forma HTML é uma linguagem mais declarativa do que imperativa. No caso do JS podemos fazer um código imperativo ou declarativo. 

//A abordagem declarativa tem muito mais haver com o paradigma funcional por exemplo.
