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

function copiar(callback) {
    // A callback deve ser executada quando a tarefa
    //for concluída, deve ser chamada apenas depois
    //de terminar a tarefa. Quem irá passar a função
    //de callback quando chamarmos essa função copiar
    //é o próprio gulp, não nos preocupamos com isso.
    console.log('Tarefa de copiar!')
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
module.exports.default = series(copiar)