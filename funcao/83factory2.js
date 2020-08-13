/*Criaremos uma factory agora com parâmetros */
function criarProduto(nome, preco){
    return {
        nome, //só nome ou nome:nome dá na mesma
        preco, //parâmetro variável
        desconto: 0.1 //parâmetro fixo
    }
}

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1199.49))
/*Podemos ter uma factory que retorna funções
também, um objeto com várias funções agrupadas.
Podemos então retornar dados como fizemos aqui,
personalizando-os com os argumentos passados,
ou colocar dentro do objeto gerado um conjunto
de funções que queremos agrupar dentro do objeto.
Ambas abordagens são válidas. */
