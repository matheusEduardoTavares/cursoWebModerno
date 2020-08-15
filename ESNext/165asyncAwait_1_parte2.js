function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

function retornarValor(){
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

// async function executar() {
//     let valor = await retornarValor()

//     await esperarPor(1500)
//     console.log(`Async/Await ${valor}...`)

//     await esperarPor(1500)
//     console.log(`Async/Await ${valor + 1}...`)

//     await esperarPor(1500)
//     console.log(`Async/Await ${valor + 2}...`)
// }

// executar()
/*Resultado:
Async/Await 10...
Async/Await 11...
Async/Await 12...
Parece um código síncrono mas que na verdade é assíncrono.*/

//Para pegarmos um retorno do executar:
async function executar() {
    let valor = await retornarValor()

    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}

//Não podemos fazer assim pois como executar é uma função
//asíncrona, async, ele retorna uma promise.
const v = executar()
console.log(v) //Promise { <pending> }
//Não podemos marcá-lo como await pois o node não pode 
//usar await sem async, diferente do deno.
//Faremos da forma certa que é usando then no próximo
//arquivo.