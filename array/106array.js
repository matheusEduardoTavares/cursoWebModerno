console.log(typeof Array, typeof new Array, typeof []) // function object object

//um array literal também é um objeto. Em JS o array é uma estrutura dinâmica, ou seja não tem um tamanho fixo como em outras linguagens, portanto pode aumentar ou diminuir a qualquer momento. O array em JS como é fracamente tipado é heterogêneo, pode colocar qualquer tipo junto em um mesmo array; mas a boa prática é trabalharmos com dados homogêneos no array.

let aprovados = new Array('Bia', 'Carlos', 'Ana') // essa não é a forma + recomendada de criarmos array, a forma + recomendada é da forma literal mas assim também funciona
console.log(aprovados) // [ 'Bia', 'Carlos', 'Ana' ]

//notação recomendada do array:
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0]) // Bia
console.log(aprovados[1]) // Carlos
console.log(aprovados[2]) // Ana
console.log(aprovados[3]) // undefined

//Adicionando elementos no array:
aprovados[3] = 'Paulo' // com essa forma conseguimos adicionar um elemento novo na posição 3 que estava até então undefined, mas não é a forma mais recomendada, essa forma é mais usada para substituir um elemento já existente a partir do índice
aprovados.push('Abia') // o método push é mais apropriado para adicionarmos elementos em um array
console.log(aprovados.length) // 5, é a quantidade de elementos do array

aprovados[9] = 'Rafael'
console.log(aprovados.length) // 10, com isso os índices 5, 6, 7 e 8 ficarão com valores undefined mas existirão dentro do array
console.log(aprovados[8] === undefined) // true
console.log(aprovados[8] === null) // true

console.log(aprovados)//[ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Abia', <4 empty items>, 'Rafael' ]

//Algumas funções do array
aprovados.sort() // ordena o array. Como só há nomes dentro do array, strings, será ordenado alfabeticamente. Então causa alteração no array.
console.log(aprovados)// [ 'Abia', 'Ana', 'Bia', 'Carlos', 'Paulo', 'Rafael', <4 empty items> ]

// Há métodos que além de fazerem alteração no array, geram um novo array, retornam um novo array, ou seja, chamamos o método e ele não altera o array original, oque muitas vezes é mais interessante que alterar o array original, mas o método sort não retorna um novo array, e sim altera o original.

// Excluir elementos do array:
delete aprovados[1] // usando operador delete da mesma forma que excluímos 1 atributo de 1 objeto. O delete não reeordena o array, simplesmente seta undefined na posição no array. O elemento de índice 2 continua tendo índice 2. Então o array não é reordenado.
console.log(aprovados[1]) // undefined
console.log(aprovados[2]) // Bia

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // serve para adicionar elementos de 1 determinado índice, para remover elementos de 1 determinado índice ou fazer os 2 ao mesmo tempo. Os parâmetros são: o índice que queremos trabalhar, o segundo parâmetro é quantos elementos serão afetados a partir do índice do primeiro parâmetro, então se for 1 será só o próprio elemento, se for 2 será o próprio elemento e o do índice posterior e assim por diante. Colocando splice(1, 1), é deletado somente o elemento que está no índice 1. Se fosse splice(1, 2), seria deletado o elemento de índice 1 e o de índice 2, ou seja, sobraria somente [ 'Bia' ]
console.log(aprovados) // [ 'Bia', 'Ana' ]

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1') // agora para adicionar elementos na posição que foi deletado é só por um terceiro parâmetro. No caso, a partir do índice 1 será excluído 2 elementos, ou seja, sobrará apenas [ 'Bia' ] e será adicionado no índice 1 a string Elemento1, ficando:
console.log(aprovados) // [ 'Bia', 'Elemento1' ]

// Se quisermos não excluir ninguém e só adicionar elementos basta por o segundo parâmetro como 0:
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, 'Elemento1', 'Elemento2') // podemos adicionar quantos elementos quisermos, e como colocamos 0 no segundo argumento não será excluído nenhum elemento. O elemento1 será adicionado na posição 1 e o elemento2 na posição 2, daí virá Carlos e por fim Ana:
console.log(aprovados) // [ 'Bia', 'Elemento1', 'Elemento2', 'Carlos', 'Ana' ]
//Depois veremos melhor o splice mas ele é muito flexível e versátil. Resumindo: .splice([índice], [quantidade de elementos que serão excluídos a partir do índice], [Elementos que serão adicionados no índice, pode haver quantos quisermos, um só ou nenhum])
