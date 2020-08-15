const { valuesIn } = require("lodash")

let a = 1
console.log(a)

console.log(typeof Promise) // function

let p = new Promise(function (cumprirPromessa) {
    //cumprirPromessa(3)

    //Se passarmos + de 1 parâmetro para promessa, todos
    //além do primeiro serão ignorados, mesmo que no 
    //then seja colocado + parâmetros. SE quisermos 
    //retornar + de 1 valores basta retornar um objeto
    //e dentro do objeto tem quantos valores quisermos
    //assim: 
    cumprirPromessa({
        x: 3,
        y: 4
    })

    //Podemos gerar um array também, pode ser qualquer 
    //um desses na promessa, o que quisermos.
})

console.log(typeof p)

p.then(function(valor) {
    console.log(valor)
})

//Sintaxe + interessante:
p.then(valor => console.log(valor))
//POdemos chamar quantos then sequenciais quisermos, ex:

let teste = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

teste
.then(valor => valor[0])
// .then(primeiro => console.log(primeiro)) // Ana
.then(primeiro => primeiro[0])
.then(letra => letra.toLowerCase())
.then(letraMinuscula => console.log(letraMinuscula)) // a

function primeiroElemento(array) {
    return array[0]
}

function primeiraLetra(string) {
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

teste
.then(primeiroElemento)
.then(primeiraLetra)
.then(letraMinuscula)
.then(console.log) // a
//Só colocando console.log sem passar o parâmetro 
//explicitamente já entende que é pra imprimir o resultado
//do then anterior.
/*
Quando temos uma chamada que passamos uma função que vai
pegar apenas um determinado parâmetro e passar para a 
própria função podemos simplesmente passar a própria
função como referência e automaticamente ele passa o 
valor como parâmetro, como foi no caso do console.log
*/

new Promise((resolve, reject) => {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
.then(primeiroElemento)
.then(primeiraLetra)
.then(letraMinuscula)
.then(console.log) // a