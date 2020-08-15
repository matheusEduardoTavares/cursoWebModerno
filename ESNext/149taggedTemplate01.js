/**
 * Template string é a capacidade de
 * interpolar uma variável dentro de uma
 * string interpolada por crase.
 * Podemos também criar o chamado tagged
 * template, que é processar a template
 * string a partir de uma função.
 */

// tagged template - processa o template
//de uma função
function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`)
//passando uma template string para uma
//função, como nesse caso da tag, significa
//que estamos passando a template string
//como argumento. O operador rest, que é
//o valores será o conteúdo que está
//dentro das chaves, no caso, Gui e Aprovado
//e o outro parâmetro será tudo resto em
//um array. O resultado do console log será:
/*
[ '', ' está ', '.' ]
[ 'Gui', 'Aprovado' ]
Outra string
*/
//Resumindo, o partes é : [ '', ' está ', '.' ],
//ou seja, tudo que não está interpolado.
//Já o valores é : [ 'Gui', 'Aprovado' ],
//o que está interpolado. O retorno não
//usou os arrays, retornou outra string
//aleatória que no caso foi:
//Outra string

//Isso não é muito utilizado, mas um bom
//uso disso é por exemplo pegarmos valores
//numéricos e aplicarmos uma máscara de 
//valores monetários por exemplo. Controlamos
//o parser de uma template string com ele.

//A sintaxe da tagged template é essa,
//chamamos a função e sem o parênteses
//passamos uma template string.