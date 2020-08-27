// Usaremos um servidor para desenvolvimento, não para 
//produção, em que se um arquivo for alterado, automaticamente
//o build executa, gera os arquivos finais, o servidor é
//restartado e a aplicação ficará na versão mais nova.
const gulp = require('gulp')

function monitorarArquivos(callback) {


    return callback()
}

function servidor(callback) {


    return callback()
}

module.exports = {
    monitorarArquivos,
    servidor
}