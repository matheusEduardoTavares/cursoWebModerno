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

async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
    try{
        const numeros = []
        for (let _ of Array(qtdeNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    }
    catch (e){
        if (tentativas > 10) {
            throw "Não deu certo!"
        }
        else{
            return gerarMegaSena(qtdeNumeros, tentativas + 1)
            //Caso seja gerado um numero repetido, para corrigir
            //e fazer dar certo, podemos tentar fazer gerar 
            //outra mega sena novamente.
        }
    }
}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)
/*
Para gerar mega sena essa lógica é ruim, o ideal era ter
um while até gerar o número correto dentro do 
gerarNumerosEntre , mas fizemos assim para entender melhor
o uso do try catch dentro do async await.

Resumindo, dentro de uma função assíncrona:
O retorno é o resolve.
Uma exceção rejeita a execução da promise. No caso do que
fizemos, o reject só será lançado no throw "Não deu certo!"
ou seja, se o número de tentativas for maior que 10. Se
não tratarmos com try catch o reject acaba sendo chamado 
quando um erro ocorre, e se de forma explícita chamarmos
um erro com throw, o reject também será chamado.
*/