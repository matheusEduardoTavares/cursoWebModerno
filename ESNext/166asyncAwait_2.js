//veremos tratamento de erro dentro do async await.
function gerarNumerosEntre(min, max, numerosProibidos) {
    if(min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numerosProibidos.includes(aleatorio)){
            reject('Número repetido!')
        }
        else{
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdeNumeros) {
    try{
        const numeros = []
        for (let _ of Array(qtdeNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
            //trabalhar mutabilidade dentro de um escopo 
            //fechado não tem problema. Mas devemos tomar 
            //cuidado no local que colocamos await. O await deve
            //sempre vir antes da função que retorna uma 
            //promise, se fizermos:
            //await numeros.push(gerarNumerosEntre(1, 60, numeros))
            //dará problema pois não é a função para adicionar 
            //um elemento no array que retorna uma promise.
        }
        return numeros
    }
    catch (e){
        throw "Que Chato!!!"
        /*
        Agora não será mais o reject quem será executado, e
        sim o catch. Ele rejeita uma promise. Para resolver
        uma promessa dentro de uma função assíncrona retornamos
        o valor, e para rejeitar usamos o catch.
        */
    }
}

gerarMegaSena(8)
    .then(console.log)
    .catch(console.log)
