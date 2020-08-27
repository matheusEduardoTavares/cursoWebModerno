// Usaremos um servidor para desenvolvimento, não para 
//produção, em que se um arquivo for alterado, automaticamente
//o build executa, gera os arquivos finais, o servidor é
//restartado e a aplicação ficará na versão mais nova.
const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function servidor() {
    return gulp.src('build')
        // Chamamos o webserver passando as
        //configurações do servidor, qual
        //será a porta e coisas do tipo
        .pipe(webserver({
            port: 8080,
            // open: quer abrir o browser?
            open: true,
            livereload: true
        }))
}

function monitorarArquivos(callback) {
    // Dizemos para o watch, passando por 
    //parâmetro que quem queremos monitorar é
    //a pasta src, onde está o código fonte,
    //pois se alterarmos o código fonte queremos
    //que alguma task seja executada novamente.

    // Se qualquer arquivo html mudar, a função
    //callback que é o segundo parâmetro é
    //chamada, chamando a task appHTML, que foi
    //o nome dado a task responsável pelo HTML
    //no app.js que está dentro da pasta gulpTask
    //a partir dessa linha:
    // gulp.task('appHTML', appHTML)
    watch('src/**/*.html', () => gulp.series('appHTML')())
    
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())

    return callback()
}

module.exports = {
    monitorarArquivos,
    servidor
}