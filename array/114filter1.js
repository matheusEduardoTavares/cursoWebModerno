const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

//Podemos aprender mais na documentação, no site mdn da mozilla, o developer/mozilla.org se procurarmos por Array.prototype.filter() entenderemos melhor o filter.
//O primeiro parâmetro do callback é cada elemento do array, o segundo é o índice, o terceiro é o array inteiro igual nos outros. Além do callback podemos passar também o this, que é quem será executado dentro do callback. Se não passarmos esse parâmetro o this é quem está chamando a função filter. O callback é um parâmetro obrigatório mas o do this não.
console.log(produtos.filter(function (p){
    //aqui aplicamos alguma lógica que retorna true ou false. Se for true o elemento estará no array final, se for false não estará. Aqui normalmente o array final é menor que o original. Caso todos elementos deem true, aí o array final terá os mesmos elementos do array original.
    // return false >> [] temos um array vazio no final
    //se fosse return true todos elementos do array original estariam nesse array final.
    //Aqui aplicamos alguma lógica, por exemplo:
    return p.preco > 2500
})) // [ { nome: 'iPad Pro', preco: 4199, fragil: true } ]
//No map o resultado era os elementos do array transformados, e aqui no filter o resultado é true ou false, se for true o elemento vai para o array final, se for false não vai.

console.log('------------------')

//Produtos frágeis:
//const fragil = produto => produto.fragil === true
const fragil = produto => produto.fragil // da na mesma, não precisamos por === true pois só retornará se o fragil for true.

//Produtos com preço maior que 500 reais:
const caro = function (produto) {
    return produto.preco >= 500
}

const resultado = produtos.filter(caro).filter(fragil)
console.log(resultado)
