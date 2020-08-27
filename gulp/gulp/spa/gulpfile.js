// Faremos um pequeno projeto usando várias dependências
//que estão no package.json. Usaremos um servidor para
//servir nossos arquivos e sempre que algo mudar tudo 
//será recompilado automaticamente. O build será quebrado
//em vários arquivos ao invés de um arquivo só.
const gulp = require('gulp')
const { series, parallel } = require('gulp')

const { appHTML, appCSS, appJS, appIMG } = require('./gulpTasks/app')
const { depsCSS, depsFonts } = require('./gulpTasks/deps')
const { monitorarArquivos, servidor } = require('./gulpTasks/servidor')

module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos
)