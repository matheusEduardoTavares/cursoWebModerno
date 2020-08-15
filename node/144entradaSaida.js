console.log(process.argv)
//Pegar parâmetros pela chamada no terminal:
const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)  se passarmos a flag -a para 
//execução desse programa com process, anonimo será true,
//se não, será false.

if (anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
}
else{
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')
        //O replace serve para tirar o enter do usuário.

        process.stdout.write(`Fala ${nome}!!\n`)
        process.exit()
    })
}
//stdout é standard out, saída padrão, é como o console.log.
//Colocamos \n no fim pois o stdout não o põe por padrão,
//diferente do console.log.
//O process.exit() finaliza a aplicação.
//O process.stdin é a entrada padrão, o 'data' é o evento
//de on que irá acontecer quando a pessoa digita algo e dá
//enter, ou seja, a pessoa entrou com dados pelo teclado.
//Por fim a callback será chamada depois de digitarmos o 
//valor de entrada e darmos enter, e esse valor digitado
//vai para variável data da arrow function.
//O process tem bem mais coisas que isso.