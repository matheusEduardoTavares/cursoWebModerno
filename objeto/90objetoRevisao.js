// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
//o padrão do JS é não deixar espaço em branco
//no identificador como fizemos no marca do
//produto

produto.preco = 220
console.log(produto)

delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function(){
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
//é interessante essa notação para fazermos 
//uma introspecção no objeto. Usamos a notação 
//ponto somente quando já sabemos exatamente
//qual é o nome dos atributos dentro do objeto
console.log(carro)

delete carro.condutores
//tudo que está dentro (abaixo) de condutores
//será excluído junto dele
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
//podemos deletar métodos também
console.log(carro)
console.log(carro.condutores) // undefined
//console.log(carro.condutores.length) // dá erro
