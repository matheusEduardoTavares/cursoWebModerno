function gerarNumerosEntre(min, max, tempo) {
    if(min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        setTimeout(function () {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)
    })
}

//Para gerar 6 números aleatórios e trabalhar com eles
//depois de serem gerados a partir de um único then, ou
//seja, executando 10 promises, fazemos:
function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 60, 4000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 60, 1500)
    ])
}

//Passamos 1 label para o console.time para ver quanto
//tempo demorou
console.time('promise')
gerarVariosNumeros()
    .then(numeros => console.log(numeros))
//imprime um array em que cada um é o resultado de uma 
//resposta
    .then(() => {
        console.timeLog('promise')
        //mostra o tempo de execução de uma chamada
        console.timeEnd('promise')
        //O timeEnd encerra o time
        // promise: 4.007s
        // promise: 4.007s
    })

/*
Colocamos os console.timeLog e timeEnd dentro de um then
pois se não eles seriam sincronos e executados antes 
das promises.
*/