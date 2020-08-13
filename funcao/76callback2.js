const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]
//agora queremos gerar um novo array que irá conter
//somente as notas desse array notas mas menores que 7
/*Para tal faremos um exemplo sem usar callback e 
outro usando o callback por meio da função filter que
é própria do array. Assim veremos que com o callback
teremos códigos + inteligentes. */

// Sem callback:
const notasBaixas1 = []
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// Com callback:
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})
/*O filter filtra os elementos de 1 array a partir
de um determinado critério que vai ser uma 
função callback que retornará true ou false. Essa
função será chamada para cada elemento do array, se
a função retornar true significa que aquele elemento
deve ser adicionado no array que está sendo gerado.
Se a função retornar false o elemento não será 
adicionado no array. Essa função filter não altera
o array original, então o notas fica como está.
Passamos como argumento uma função que será um callback
, no caso o parâmetro nota da função é o elemento
do array, não seu índice. o return nota < 7 dará 
um resultado verdadeiro ou falso para cada um dos
elementos do array, e quando for verdadeiro então esse
elemento será adicionado no array notasBaixas.*/
console.log(notasBaixas2)
//Portanto o notasBaixas2 tem o mesmo resultado do
//notasBaixas1 e é uma forma bem melhor de ser feito.
//Ainda dá para melhorar + ainda usando arrow function:

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)
//O callback é uma abordagem + funcional

//É + interessante ainda adicionarmos a arrow a uma
//constante e passarmos a constante direto no filter:
const notasMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenorQue7)
console.log(notasBaixas4)
//assim podemos reutilizar a arrow function em outros
//lugares.

/*Callback é um recurso muito interessante mas um 
uso exagerado disso pode deixar o código menos 
legível e fácil de entender. */
