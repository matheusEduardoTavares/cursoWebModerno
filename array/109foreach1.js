const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

//Chamamos o método forEach e passamos como argumento dele uma callback que será chamada para cada interação que for feita no array. Ou seja, para cada novo elemento percorrido no array, será chamado a callback passando o próprio elemento e o índice correspondente daquele elemento. O primeiro parâmetro é o valor do elemento e o segundo é o índice.
aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})
/*1) Agatha
2) Aldo
3) Daniel
4) Raquel */

//Não somos obrigado a passar nenhum parâmetro em JS, por isso podemos não passar nenhum argumento no callback ou um único argumento:
aprovados.forEach(nome => console.log(nome))
/*Agatha
Aldo
Daniel
Raquel */

//Podemos também armazenar uma função em uma variável e passá-la como argumento do forEach como callback:
const exibirAprovados = aprovado => console.log(aprovado)
//Assim podemos reaproveitar essa função em outros lugares se precisar
aprovados.forEach(exibirAprovados)
/*Agatha
Aldo
Daniel
Raquel 

Na arrow function podíamos por os 2 argumentos também para pegar o índice também. Tal como podemos adicionar uma função à uma variável e passá-la como argumento ou não como fizemos. Se quisermos o índice precisamos dos 2 argumentos pois o índice sempre será o segundo argumento.

Há um terceiro argumento que podemos passar no forEach que é o próprio array. Exemplo:*/
aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})
/*1) Agatha
[ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
2) Aldo
[ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
3) Daniel
[ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ]
4) Raquel
[ 'Agatha', 'Aldo', 'Daniel', 'Raquel' ] */

/*Se passarmos um quarto parâmetro para o forEach ele será undefined, ou seja, a função callbak que passamos par ao forEach pode receber 3 argumentos: o valor, o índice e o array. Podemos suprimir quantos parâmetros quisermos.

Se for uma lista de objetos o valor será o objeto, se for uma lista de arrays dentro de outro array, oque iremos receber é o array.*/
