const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}
//Essa é uma função que pode ser passada para uma
//função for each.
/*A ideia do callback é passarmos uma função para outra
função e quando determinado evento acontecer, essa
função que passamos será disparada, chamada de volta.
A função callback pode ser chamada várias vezes ou pode
ser chamada apenas 1 única vez, depende do contexto que
estamos passando para essa função */

fabricantes.forEach(imprimir)
//por padrão o for each passa como primeiro parâmetro
//o valor e como segundo parâmetro o índice daquele
//elemento no array.
//Ou seja, para cada elemento do array, será chamado
//de volta a função imprimir, para cada elemento que
//for encontrado.

fabricantes.forEach(function(fabricante){
    console.log(fabricante)
}) // nesse caso com 1 único parâmetro, o parâmetro
//será cada um dos elementos do array, não seu índice

//Transformando isso em uma função arrow:
fabricantes.forEach(a => console.log(a))
//Todos os casos dá o mesmo resultado.

/*Resumindo: o callback é só passarmos uma função e 
essa função será chamada quando algum evento acontecer.
No caso o evento é o loop, sempre que encontra um novo
elemento dispara um evento que é a função que chamamos.
O evento no caso é cada um dos elementos percorridos
no array. 

Outro exemplo de callback é quando fazemos uma chamada
ajax, uma chamada para o servidor. Quando fazemos uma
requisição ajax vamos no servidor e passamos um callback
, uma função que será chamada quando a resposta chegar
, independente de ser uma resposta de sucesso ou de 
erro. Nesse exemplo passamos uma função de sucesso e
1 de erro e será chamado a callback correspondente a
resposta obtida.*/