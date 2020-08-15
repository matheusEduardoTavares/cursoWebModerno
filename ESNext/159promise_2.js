// setTimeout(function () {
//     console.log('Executando callback...')
    
//     setTimeout(function () {
//         console.log('Executando callback 2...')
        
//         setTimeout(function () {
//             console.log('Executando callback 3...')
//         }, 2000)
//     }, 2000)
// }, 2000)

//SImularemos com promise o que ocorreu nas linhas acima
// function esperarPor(tempo = 2000) {
//     return new Promise(function(resolve) {
//         setTimeout(function(){
//             console.log('Executando promise...')
//             resolve('Vishhhhh')
//         }, tempo)
//     })
// }

// esperarPor(3000)
//     .then(texto => console.log(texto))


//Aqui sim estamos simulando:
function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function(){
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

//Dá o mesmo resultado que utilizando callbacks mas 
//com bem menos linhas:
esperarPor()
    .then(() => esperarPor())
    .then(esperarPor) // como já vimos isso é o mesmo de
    //cima, 40