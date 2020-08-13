function rand([min=0, max=1000]) {
    //vai verificar se o min é maior que
    //o max e se for ele vai inverter a
    //posição das 2 de forma a ficar o 
    //menor valor primeiro e o maior
    //valor em segundo. Estamos
    //invertendo as variáveis com o 
    //destructuring
    if (min > max) [min, max] = [max, min]
    //aqui oque está depois do = é um
    //novo array que usa os atributos que 
    //foram desestruturados
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
//dará erro: 
//console.log(rand()) pois estamos
//desestruturando algo que n existe
// para concertar isso fazemos:
//function rand([min=0, max=1000] = [])
