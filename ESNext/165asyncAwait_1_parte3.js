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

// executar()
// .then(console.log)
/*Resultado:
Async/Await 10...
Async/Await 11...
Async/Await 12...
13
*/

//Ou fazemos assim:
async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()
//Então podemos retornar uma promise explicitamnte com 
//return new Promise ou quando chamamos uma função que é 
//async que retorna uma promise de maneira implícita.

async function retornarValorRapido() {
    return 20
}

console.log(retornarValorRapido())
//Promise { 20 } , ou seja, retorna uma promessa, mas se 
//quiser retornar somente seu valor, acessamos com o then
//ou dentro de uma função assíncrona usamos o await para 
//receber ele na mesma linha antes de passar para próxima.
retornarValorRapido().then(console.log) // 20

//Resultado final:
/*
Promise { 20 }
20
Async/Await 10...
Async/Await 11...
Async/Await 12...
13
*/

