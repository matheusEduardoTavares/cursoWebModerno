const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})
//o primeiro parâmetro é o path e o nome do arquivo que será gerado. O segundo parâmetro é o conteúdo do arquivo, e o terceiro parâmetro uma callback no caso de gerar algum erro, aí podemos tratar esse erro.