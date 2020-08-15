/*
Dentro do javascript já temos uma estrutura
chave valor dinâmica, o objeto.
Mas foi adicionado o map também. No caso do
objeto a chave é apenas um literal, um
valor, como por exemplo uma string. Já
no map, a chave pode ser uma função, um
número, um próprio objeto, interessante.
Isso dá uma maior flexibilidade para 
termos a chave que queremos. 
O map não substitui o objeto, mas em 
algumas situações ele é + interessante.
*/

const tecnologias = new Map()
tecnologias.set('react', { framework: false })
//Nesse caso a chave é react e o valor é um
//objeto.

tecnologias.set('angular', { framework: true })

console.log(tecnologias.react) // undefined
console.log(tecnologias['react']) //undefined

//No caso do map para acessarmos um valor
//a partir da chave temos que usar o 
//método get, direto não funciona:
console.log(tecnologias.get('react'))
//{ framework: false }
console.log(tecnologias.get('react').framework)
//false

//Podemos criar um map já atribuindo os
//elementos:
const chavesVariadas = new Map([
    [function () { }, 'Função'],
    //chave é uma função
    [{}, 'Objeto'],
    //chave é um objeto
    [123, 'Número']
    //chave é um número literal.
])
//basta passar um array para o new Map e
//cada array interno será um conjunto chave
//valor.
//No objeto como chaves só temos strings
//ou o próprio literal como chave.
chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})
/*
[Function (anonymous)] Função
{} Objeto
123 Número
*/

//O método has mostra se temos uma determinada
//chave dentro do map
console.log(chavesVariadas.has(123)) // true
//O delete serve para deletar uma chave
//com seu respectivo valor do map.
chavesVariadas.delete(123)
//se printarmos o resultado do delete na
//tela, se ele retorna true é porque ele
//achou e deletou o conjunto chave valor,
//se for false ele não achou.
console.log(chavesVariadas.has(123)) // false

//Por fim temos o atributo size para ver
//quantos conjuntos chaves valor temos
//dentro do map:
console.log(chavesVariadas.size) // 2

//Essa estrutura não aceita repetições
//na chave:
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
console.log(chavesVariadas.get(123)) // b
//Como não podemos ter duplicação, o último
//valor alocado para determinada chave é
//o que fica.

//A chave não pode repetir, mas o valor
//pode.
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)
/*
Map(4) {
  [Function (anonymous)] => 'Função',
  {} => 'Objeto',
  123 => 'b',
  456 => 'b'
}
*/
//Qualquer coisa pode ser chave no map, só
//não pode ter repetição de chave.

/*
Exemplos funcionais:
----
    const teste = new Map()
    teste.set(1, () => console.log("hello"))
    teste.get(1)()
----

----
    const teste = new Map()
    const func = () => console.log('Opa!!')
    teste.set(func, () => console.log("Bom dia!"))
    teste.get(func)() // Bom dia!
----
*/