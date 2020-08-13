const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.4 // evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1, 
        obj: {
            blabla: 2
        }
    }
}

console.log(prod2)

/*O JSON declaramos colocando aspas duplas p/ cada
chave do objeto, portanto do geito que
fizemos nossos objetos eles n sao json, 
sao objetos literais */