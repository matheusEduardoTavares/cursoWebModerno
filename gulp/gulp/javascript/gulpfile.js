// const { series, parallel } = require('gulp')
const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(callback) {
    return gulp.src('src/**/*.js')
    // Primeiramente pegamos o código e o convertemos com
    //babel para ser interpretado pelo browser
        .pipe(babel({
            // O comments false faz com quie os arquivos de
            //comentários não sejam transferidos para o
            //arquivo final.
            comments: false,
            // O env pega o JS + novo possível. Podemos usar
            //outros presets, mas o env é o + novo.
            presets: ["env"]
        }))
        // O uglify deixa o código minificado
        .pipe(uglify())
        // Dentro desse WorkFlow podemos usar a função
        //do tipo on, ou seja, quando acontecer um
        //determinado evento (esses eventos são passados
        //como string para o método on), aí é executado
        //uma certa função que passamos como segundo parâmetro
        .on('error', err => console.log(err))
        // O concat vai pegar todos os arquivos selecionados
        //que já foram transpilados / compilados usando
        //babel da versão mais atual para uma versão +
        //compatível que já foi feito o processo de 
        //enfriamento: jogar todo código numa linha só junta
        //então tudo isso será concatenado e o parâmetro do 
        //concat é o arquivo que queremos que ele gere no 
        //final, e usamos o padrão .min. quando oa arquivo
        //é minificado.
        .pipe(concat('codigo.min.js'))
        //Como destino queremos que o arquivo codigo.min.js 
        //seja jogado para dentro da pasta build.
        .pipe(gulp.dest('build'))
    
    // Ao invés de retornarmos a callback aqui no fim, 
    //podemos simplesmente retornar tudo isso colocando um
    //return antes da primeira linha dessa função padrao
    // return callback()
}

function fim(callback) {
    console.log('Fim!!!')
    return callback()
}

//O fim só irá ser executado depois que o transformacaoJS for
//executado
exports.default = series(transformacaoJS, fim)

//Ambos serão executados em paralelo, e quem terminará
//primeiro irá depender:
// exports.default = parallel(transformacaoJS, fim)
