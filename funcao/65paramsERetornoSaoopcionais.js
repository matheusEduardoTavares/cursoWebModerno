//Exemplo (n é usado na prática): 
function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m².`)
    } else {
        return area
    }
}

console.log(area(2, 2)) // 4
console.log(area(2)) // NaN
console.log(area()) // NaN
console.log(area(2, 3, 17, 22, 44)) // 6
console.log(area(5, 5)) // entra no console.log e imprime seu conteúdo e imprime no fim undefined para o console.log dessa linha (a função n retornou nada pois entrou no IF)