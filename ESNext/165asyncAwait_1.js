function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

//O node até o momento não suporta usarmos await diretamente
//em um arquivo:
//await esperarPor(3000) // dará erro dizendo que await 
//só é valido dentro de uma função assíncrona

// esperarPor(2000)
//     .then(() => console.log('Executando promise 1...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 2 ...'))
//     .then(esperarPor)
//     .then(() => console.log('Executando promise 3 ...'))

//Faremos o mesmo código de cima mas com async await, que
//é um código que parece síncrono mas que na verdade é
//assíncrono.

// async function executar() {
//     esperarPor(1500)
//     console.log('Async/Await 1...')

//     esperarPor(1500)
//     console.log('Async/Await 2...')

//     esperarPor(1500)
//     console.log('Async/Await 3...')
// }

//executar()
//Da forma que está, irá printar os 3 console.log primeiro,
//e só depois chamará o esperarPor para os 3 casos pois 
//estes são assíncronos, e tudo que é assíncrono é executado
//por último, enquanto os console.log são síncronos. Para
//fazer a promise esperar ser resolvida para só então ir
//para próxima linha, é preciso por o await, assim:
async function executar() {
    await esperarPor(1500)
    console.log('Async/Await 1...')

    await esperarPor(1500)
    console.log('Async/Await 2...')

    await esperarPor(1500)
    console.log('Async/Await 3...')
}

executar()
//Dá a sensação que é um código síncrono, pois mesmo as 
//partes assíncronas que são as chamadas do esperarPor, 
//devido ao await, só irá para próxima linha quando for
//executado. Aqui não precisamos do then pois o que está
//com o await espera pegar a resposta para só depois ir para
//próxima linha