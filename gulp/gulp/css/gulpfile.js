// SASS é um pré-processador CSS: conseguimos por novas
//funcionalidades que não estão disponíveis no CSS para
//nos ajudar a melhorar o código CSS, podendo reutilizá-lo
//entre outros. Com ele conseguimos trabalhar com
//variáveis. Temos vários recursos dentro do SASS. É
//como um superSet de CSS, em que é colocado vários
//recursos que não estão disponíveis no CSS padrão.
const { series } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const uglifycss = require('gulp-uglifycss')

function transformacaoCSS(){
    return gulp.src('src/sass/index.scss')
        // Convertendo todo SASS para CSS:
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ 'uglyComments': true }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

exports.default = series(transformacaoCSS)