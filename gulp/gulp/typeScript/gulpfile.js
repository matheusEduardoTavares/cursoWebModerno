// Typescript é um superSet de javascript, adicionando 
//tipagem ao mesmo. Usaremos um plugin do gulp para poder
//trabalhar com typescript.
//Typescript adiciona outras coisas também, como interfaces. É
//uma linguagem criada pela microsoft e podemos usá-lo junto
//de grandes frameworks, e tanto para o backend quanto para
//o frontend.
const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')

//Arquivo de configuração que o compilador do TS
//irá utilizar:
const tsProject = ts.createProject('tsconfig.json')

function transformacaoTS(){
    // Como dentro do tsconfig.json já temos onde está o 
    //root, o código fonte da aplicação que deverá ser 
    //usado, não passamos nada como argumento do src
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('build'))
}

exports.default = series(transformacaoTS)