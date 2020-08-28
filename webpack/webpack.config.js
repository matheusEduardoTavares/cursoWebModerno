// Esse arquivo é interpretado pelo node, logo
//precisamos usar commonsJS

const webpack = require('webpack')

module.exports = {
    // mode: 'production',
    mode: 'development',
    entry: './src/principal.js'
}

// No package.json colocamos o script start
//chamando webpack, então quando executarmos
//dentro da pasta webpack, onde está o 
//webpack.config.js o npm start, será executado
//aqui o webpack e será criado uma pasta 
//chamada dist dentro da pasta webpack. Dentro
//da pasta dist estará o arquivo de entrada, que
//está no entry processado, com o nome de main.js,
//inclusive o código que implementamos serve
//apenas para dar um log em bom dia, e se 
//executarmos no terminal dentro da pasta
//webpack o comando:
//npm start && node dist/main.js
//será impresso no cosole tal mensagem.
//O arquivo main.js gerado é bem grande e 
//contém várias coisas do webpack, mas não há
//nenhuma dependência externa do webpack então
//funcionaria até no browser. Mas esse arquivo
//gerado é para ser usado apenas no ambiente
//de desenvolvimento. Se mudarmos o mode da 
//linha 7 de development para production,
//salvassemos e executassemos novamente também
//funcionaria, mas o arquivo será de uma única
//linha pois estará minificado, é bem diferente
//do código gerado para desenvolvimento. Sem
//colocarmos o mode, por padrão será setado
//como production.