const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com os preços
function funcao (elemento) {
    return JSON.parse(elemento)
}

function funcao2 (elemento){
    return elemento.preco
}

let precos = carrinho.map(funcao).map(funcao2)

console.log(precos)
