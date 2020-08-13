// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
/*Oque acontece aqui é que a constante pessoa
aponta para um endereço de memória. Suponhemos
que o endereço de memória se chame 123. Lá no
endereço 123 é que de fato temos o objeto criado.
Mas a constante pessoa simplesmente aponta para
o endereço, e no endereço está o objeto. */

//Quando fazemos:
pessoa.nome = 'Pedro'
/*Não mudamos a referência da constante (pois a
constante não pode mudar), ou seja, a constante
continua apontando para o endereço 123, mas 
o dado, o objeto que está dentro desse endereço
123 foi alterado, e ele pode ser alterado. Oque
não podemos mudar nesse caso é a constante pessoa
ou seja, para onde ela aponta, mas o valor que
está nesse endereço de memória pode ser alterado.
 */

 console.log(pessoa) // {nome: 'Pedro' }

 //Agora, se fizermos:
 //pessoa -> 456 -> {...}
 //                 pessoa = { nome: 'Ana' }
 /*Estamos tentando atribuir para pessoa um
 novo objeto, e esse objeto está em um outro
 endereço de memória, por exemplo 456. Ou seja,
 estamos tentando fazer com que pessoa deixe
 de apontar para o endereço 123 e passe para 
 apontar para o endereço 456, mas, por ser uma
 constante, ela deve sempre apontar para o 
 endereço que foi criada, no caso, 123, logo, 
 ao tentar fazer com que ela mude, dará erro. Ao
 criarmos outro objeto ele ocupará outro endereço
 não tem como mudar isso. Então, sempre que 
 fizermos uma atribuição a uma constante dará
 erro, só podemos atribuir algo a uma constant
 uma única vez. Quando fazemos pessoa.nome não
 estamos atribuindo algo em pessoa, e sim no
 objeto para qual pessoa aponta.*/

Object.freeze(pessoa)
// Esse é 1 método em que congelamos o objeto
//pessoa. Uma vez que o objeto está congelado,
//não conseguimos mais mexer no objeto.
pessoa.nome = 'Maria'
console.log(pessoa.nome) // { nome: 'Pedro' }
/*Ou seja, não dá erro mas como pessoa foi 
congelado, o atributo nome do objeto que está
em pessoa continua sendo Pedro, a tentativa de
atribuição a nome é simplesmente ignorada.
Ou seja, o objeto continua exatamente como ele
era a partir do momento que o congelamos com
o método freeze. */
console.log(pessoa.nome) // Pedro

pessoa.end = 'Rua ABC'
console.log(pessoa) // { nome: 'Pedro' }
/*Como congelamos pessoa não dá para mudar nada
do objeto mais, nem alterar um atributo nem 
adicionar novos atributos e nem deletar
atributos */
delete pessoa.nome
console.log(pessoa) // { nome: 'Pedro' }

/*Ou seja, usando o método freeze, tornamos o
OBJETO constante, não só a referência no qual 
a variável pessoa aponta, mas também com o 
freeze o objeto não pode ser mais alterado, 
passa a ser constante. */

//Para criar um objeto constante desde o 
//ínicio basta fazer:
const pessoaConstante = Object.freeze({ nome: 'João' })
//Ou seja atribuímos a uma constante o método
//freeze e passamos como argumento o objeto que
//queremos deixar constante.
console.log(pessoaConstante) // { nome: 'João' }

//Se mexermos no objeto para que pessoaConstante
//aponta agora, por estar com freeze não vai mudar
//nada:
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante) // { nome: 'João' }
