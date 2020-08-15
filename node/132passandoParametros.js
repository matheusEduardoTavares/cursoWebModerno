//com o ...nomes podemos passar quantos argumentos quisermos.
module.exports = function (...nomes){
    return nomes.map(nome => `Boa semana ${nome}!`)
}