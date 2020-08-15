const saudacoes = require('./132passandoParametros')('Ana', 'Lucas', 'João')

console.log(saudacoes)
//[ 'Boa semana Ana!', 'Boa semana Lucas!', 'Boa semana João!' ]

//Então para passar parâmetros de um módulo para outro é só exportarmos uma função com os parâmetros que queremos receber, que serão passados no módulo que o importar. Dentro da função podemos fazer tudo que quisermos, como já vimos.