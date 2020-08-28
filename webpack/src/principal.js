//Dá erro:
import Pessoa from './pessoa'

// const Pessoa = require('./pessoa')

const atendente = new Pessoa
console.log(atendente.cumprimentar())

// import './modulos/moduloA'

// Agora iremos importar um arquivo CSS:
import './assets/css/estilo.css'
// Com isso o webpack irá enxergar o arquivo 
//estilo.css também, e acontece que não temos
//um loader para tratar arquivos CSS, então,
//se no webpack.config.js o loader para CSS
//não estiver configurado, irá dar um erro,
//dizendo que não viu nenhum loader apropriado
//para manipular o arquivo e não conseguiu
//interpretar o CSS.
// Adicionando isso no webpack.config.js
//ainda continuará dando erro, pois o webpack
//não sabe quem é o style-loader e o css-loader:
/*
module: {
    rules: [
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }
    ]
}
*/
// Para resolver isso, vamos adicionar as 
//devDependencies css-loader e style-loader
//dentro do package.json e rodar npm i novamente.
//Aí antes funcionaria, mas hoje ainda não iria
//funcionar pois o style-loader acaba gerando
//conflitos.