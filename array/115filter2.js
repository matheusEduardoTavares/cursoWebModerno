//Agora iremos simular o nosso próprio filter, assim como fizemos com o forEach e o map:

Array.prototype.filter2 = function(callback){
    let newArray = []
    for (let i = 0; i < this.length; i++){
        if (callback(this[i], i, this)) newArray.push(this[i])
    }
    return newArray
}
//Da mesma forma que o map e o foreach que fizemos, essa é uma implementação simples do filter, ou seja, temos mais coisas além disso. Por exemplo poderíamos passar como vimos um segundo parâmetro além do callback que é quem é o this, aí seria só usarmos o método apply para chamar a função e definir como contexto esse parâmetro que representa o this. Ficaria assim esse filter + completo:
/*
Array.prototype.filter2 = function(callback, thisArg = this){
    let newArray = []
    for (let i = 0; i < thisArg.length; i++){
        if (callback.apply(thisArg, [thisArg[i], i, thisArg])) newArray.push(thisArg[i])
    }
    return newArray
}

Aí caso tivéssemos além do array produtos outro array chamado produtos2 a chamada certa ficaria assim:

console.log(produtos.filter2(caro, produtos2).filter2(fragil))
Ou seja conseguimos chamar a partir de qualquer array o filter2 passando o contexto do produtos2 que é quem será percorrido e não o produtos que foi quem chamou. Aí chamamos o filter2 de novo para o fragil a partir do resultado daquele primeiro filter2 pois se colocássemos o contexto do produtos2 de novo ele iria ignorar oque foi feito no primeiro filter2 e pegar do produtos2 todos que fossem true do fragil sendo que perderia a filtragem do caro que foi feito.
*/

//O mesmo código da aula passada funcionará com o filter2 que criamos e dará o mesmo resultado:
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

const fragil = produto => produto.fragil
const caro = produto => produto.preco >= 500

console.log(produtos.filter2(caro).filter2(fragil))
