// Object.preventExtensions
/*Previne, não permite que o objeto seja 
extendido, ou seja, não será possível adicionar novos atributos ao objeto, mas ainda é possível deletar atributos. */
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível: ', Object.isExtensible(produto)) //Extensível: False

produto.nome = 'Borracha' // é possível modificar os dados
produto.descricao = 'Borracha escolar branca' // não é possível criar um novo atributo
delete produto.tag // é possível deletar atributos
console.log(produto) 
//{ nome: 'Borracha', preco: 1.99 }

// Object.seal 
//é de selar
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
/*Ao selar um objeto, não conseguimos adicionar novos atributos, excluir atributos do objeto, mas é possível modificar os valores dos atributos do objeto. */
console.log('Selado: ', Object.isSealed(pessoa)) // Selado: true

pessoa.sobrenome = 'Silva' // não funcionará
delete pessoa.nome // não funcionará
pessoa.idade = 29 // funcionará
console.log(pessoa)
//{ nome: 'Juliana', idade: 29 }

// Object.freeze que já vimos, é o Object.seal + valores constantes, onde não é possível criar novos atributos, deletar atributos e nem alterar o valor dos atributos já existentes. É completamente restrito, constante.
// O comportamento flexível do JS é muito bom em algumas situações mas é ruim em outras, pois é possível por exemplo deletarmos um dado de um objeto que é necessário para a execução de um determinado algoritmo em outra parte do sistema, então com essas técnicas trazemos mais segurança ao deixar o objeto mais estático de acordo com a necessidade.
Object.freeze()
