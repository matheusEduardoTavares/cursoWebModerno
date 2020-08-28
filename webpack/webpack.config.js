// Esse arquivo é interpretado pelo node, logo
//precisamos usar commonsJS

const webpack = require('webpack')

// module.exports = {
//     // mode: 'production',
//     mode: 'development',
//     entry: './src/principal.js'
// }

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

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    // É interessante fazermos a configuração
    //da saída: onde será gerado o arquivo
    //principal e o nome da pasta:
    output: {
        // Só com o filename o nome da pasta
        //se mantém dist. Só com o path o 
        //nome do arquivo se mantém como
        //main.js
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    // Configuramos os loaders colocando um
    //objeto para cada loader dentro de um 
    //array com chave rules, que por sua vez
    //está dentro de um objeto com chave module
    module: {
        rules: [
            {
                test: /\.css$/,
                // Por enquanto usaremos 2
                //plugins para ler os 
                //arquivos CSS e depois
                //adicionaremos +2 plugins,
                //um deles relacionados ao
                //SASS
                use: [
                    // O style-loader adiciona
                    //dentro da DOM a tag
                    //style, ou seja, adiciona
                    //CSS a DOM injetando a 
                    //tag <style>
                    'style-loader',
                    // O css-loader é quem 
                    //interpreta os imports,
                    //o @import, as urls
                    //url()
                    'css-loader'
                    /*
                    O arquivo gerado pelo loader
                    style-loader vai injetar via
                    DOM todo código CSS que for
                    encontrado, o que é 
                    equivalente a criar a tag
                    style via DOM.
                    */
                ]
            }
        ]
    }
}