/*
Na aula passada já instalamos o gulp-cli com
sudo npm i -g gulp-cli
É um framework baseado em funções. Funções são
conhecidas como tarefas, tasks. Então teremos
uma série de tarefas que automatizarão os 
processos dentro da aplicação. 
Essas tarefas podem ser executadas de forma 
serial, sequencial, uma tarefa após a outra linha
a linha; ou dependendo do momento / cenário que 
estamos trabalhando podemos paralelizar as tarefas
e essas tarefas serem executadas em paralelo, por
exemplo juntar todos os arquivos CSS da aplicação em
1 arquivo só, e fazer a mesma coisa com os arquivos
JS. Não há dependência entre essas 2 tarefas, então
poderiam ser sequencial.
Depois de juntarmos todos os arquivos em apenas
um arquivo, queremos pegar todo o código desse
arquivo único e colocar em uma linha só, que 
seria o processo de minificar, tirar os espaços em
branco, então nesse caso primeiro tem que juntar
tudo em um arquivo só para apenas depois poder 
colocá-lo todo em uma única linha.
*/
const gulp = require('gulp')
// const { series } = require('gulp')

// series é quem permite fazermos tasks em 
//série, uma após a outra.
// Outra forma de pegarmos o series:
const series = gulp.series
const { parallel: paralelo } = require('gulp')

//Criaremos + funções:
const antes1 = callback => {
    console.log('Tarefa Antes 1')

    return callback()
}

const antes2 = callback => {
    console.log('Tarefa Antes 2')

    return callback()
}

/*
function copiar(callback) {
    // A callback deve ser executada quando a tarefa
    //for concluída, deve ser chamada apenas depois
    //de terminar a tarefa. Quem irá passar a função
    //de callback quando chamarmos essa função copiar
    //é o próprio gulp, não nos preocupamos com isso.
    console.log('Tarefa de copiar!')
    return callback()
}
*/

//Agora iremos copiar o conteúdo tanto do arquivo1.txt
//quanto do arquivo2.txt para um outro arquivo txt:
function copiar(callback) {
    //o gulp.src serve para selecionar quais arquivos
    //iremos usar como entrada para o workflow que
    //vamos definir dentro desse arquivo. Como iremos
    //passar + de 1 arquivo, colocamos dentro de um
    //array:
    // gulp.src(['pastaA/arquivo1.txt', 
    // 'pastaA/arquivo2.txt'])
    //Ao incés de colocarmos um array com todos os
    //arquivos que queremos, podemos simplesmente
    //fazer assim:
    gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('pastaB'))
    // Significa que qualquer arquivo que estiver
    //dentro da pastaA e que tiver a extensão 
    //.txt será copiado para a pastaB .
    // Com a função pipe aplicamos transformações
    //com os arquivos que definimos como sendo os
    //arquivos de entrada para o workflow. Podemos
    //ter vários pipes encadeados e ir passando 
    //transformações que serão feitas naquele
    //conteúdo para ele. Isso é chamado de pipeline
    //, baseado no padrão pipe and filters, fazemos
    //transformação em uma série de dados que podem
    //ser arquivos ou até mesmo propriamente 
    //dados e vamos aplicando transformações até que
    //no final temos o resultado esperado. No caso
    //iremos colocar esses arquivos em uma pasta
    //de destino. Para tal usamos o método dest
    //de destino, passando a pasta que queremos, no
    //caso pastaB que está nesse mesmo diretório e
    //que no momento não existe mas será criada
    //automaticamente no momento em que esse
    //script for executado.

    return callback()
}

const fim = callback => {
    console.log('Tarefa Fim')

    return callback()
}

// Precisamos nesse arquivo gulpfile exportar algo
//para que seja executado:

// module.exports = series(copiar)
// Mas só assim ainda não é o suficiente, o gulp
//espera receber uma task, uma tarefa chamada
//default.
//Se no terminal executarmos gulp , ele irá procurar
//na pasta que executamos pelo arquivo gulpfile.js
//e se não houver dará erro. Podemos executar o 
//gulp informando o arquivo também usando a flag
//-f ou --gulpfile, aí ele não irá procurar mais
//pelo gulpfile.js. Se executarmos no terminal nesta
//pasta onde está esse arquivo gulp, irá dar erro
//dizendo: task never defined: default , ou seja,
//a task default não foi definida dentro do arquivo.
//Na hora de exportar precisamos exportar uma task
//chamada default, pois essa seria a porta de
//entrada do nosso script para que o gulp faça a
//execução de outras tarefas. A forma + simples de
//criarmos uma taks default é adicionar para o 
//module.exports a chave default que referencia o
//series passando a função copiar, assim:

// Agora executaremos várias tarefas em série:
// module.exports.default = series(
//     antes1,
//     antes2,
//     copiar,
//     fim
// )
// Veremos que será executado em série mesmo:
//primeiro o antes1, depois antes2, depois copiar
//e por último o fim.

//Agora faremos o antes1 e o antes2 executarem em
//paralelo:
module.exports.default = series(
    paralelo(antes1, antes2),
    copiar,
    fim
)
// Dessa forma o antes1 e o antes2 serão executados
//simultaneamente e somente após os 2 acabarem que
//será executado o copiar. Ou seja, podemos ir 
//gerando workflows mais complexos misturando o 
//sequencial com o paralelo.

// A pasta de destino seria a pasta de build da
//aplicação, pasta em que estariam os arquivos que
//iriam para produção.