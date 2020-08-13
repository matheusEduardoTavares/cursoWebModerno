/*
É uma função que retorna um objeto. Ex:
const pro1 = {
    //aqui temos a instância de um objeto
    nome: '...',
    preco: 45
}

const pro2 = {
    nome: '...',
    preco: 1234
}
...

Se precisássemos de muitos produtos e fôssemos
ficar usando CTRL C + CTRL V o código ficaria
muito grande. Acabamos gerando os mesmos dados
+ de 1 vez assim, repetindo de mais o conteúdo
de 1 objeto que queremos ter no programa. Para
resolver isso criamos uma função factory

*/

// Factory simples
function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}
/*A ideia de uma factory simples é criar uma
função e dentro da função retornar um objeto.
Esse objeto pode ter alguns valores fixos ou
podemos passsar parâmetros para essa função e
preencher nosso objeto a partir desses parâmetros.
Mas por enquanto deixaremos os parâmetros fixos.
O factory sempre retorna um novo objeto. Mesmo
ser usarmos o new, só por usarmos as chaves
estamos sempre que a função é chamada criando 
uma nova instância de pessoa. Então só de chamar
a função o objeto é criado, ex: */

console.log(criarPessoa()) //objeto criado
//sempre que executarmos essa função é criado
//uma nova instância de pessoa que pode ser
//trabalhada de forma independente.
//A função factory no caso é a criarPessoa
