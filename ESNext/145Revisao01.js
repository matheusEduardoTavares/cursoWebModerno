/*Falaremos dos novos recursos do 
ECMAScript 2015 (ES6), 2016 (ES7) e 
2017 (ES8). 
Nas 3 primeiras aulas dessa seção, 
faremos revisão de algumas coisas que 
já vimos

nessa aula veremos:
- let e const
- template string
- Operador destructuring, para objetos
ou array.
*/

//let e const, do ES 6, substituindo var
//Questão de escopo e diferença deles:
{
    var a = 2
    let b = 3
    //console.log(b) 3
}
console.log(a) // 2
//console.log(b) erro

// Template String
const produto = 'iPad'
console.log(`${produto} é
CARO!`)

// Destructuring
//Podemos desestruturar uma string tb
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras)
//C o [ 'd', '3', 'r' ]

const [x, , y] = [1, 2, 3]
console.log(x, y) // 1 3

const { idade, nome } = { nome: 'Ana', idade: 9}
console.log(idade, nome) // 9 Ana

const { idade: i, name} = { name: 'Ana', idade: 9}
console.log(i, name) // 9 Ana