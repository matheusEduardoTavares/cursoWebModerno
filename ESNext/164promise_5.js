function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro){
            reject('Ocorreu um erro!')
        }
        else{
            resolve(valor)
        }
    })
}

// funcionarOuNao('Testando', 0.5)
//     .then(v => console.log(`Valor: ${v}`))
//     .catch(err => console.log(`Erro: ${err}`))
//     .then(() => console.log('Fim!'))

//Não é passado nenhum dado do catch para um posterior then
//isso porque mesmo que no catch retorne algo, este não é
//passado para frente. Via de regra pomos o catch no fim
//para tratar um eventual erro. Pode ter vários then antes
//do catch, a hora que algum gerar 1 erro ele vai para o 
//catch.

// funcionarOuNao('Testando', 0.5)
//     .then(v => `Valor: ${v}`)
//     .then(console.log)
//     .catch(err => console.log(`Erro: ${err}`))
//     .then(() => console.log('Fim!'))

//Indepente do erro acontecer na chamada da função funcionar
//OuNao, ou em qualquer then, o erro vai cair no catch, ex:

// funcionarOuNao('Testando', 0.5)
//     .then(v => `Valor: ${v}`)
//     .then(v => consol.log(v)) // função errada
//     .catch(err => console.log(`Erro: ${err}`))
//     .then(() => console.log('Fim!'))

//Se cair no reject mostrará:
//Erro: ReferenceError: consol is not defined

//Podemos passar 2 callbacks para o then, sendo a segunda
//um erro específico daquele then:

funcionarOuNao('Testando', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v),
        err => console.log(`Erro específico: ${err}`)
    )
    .then(() => console.log('Quase Fim!'))
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('Fim!'))
/*Quando isso ocorre, o erro é tratado no próprio then, 
aí não é chamado o catch, ele servirá para todos os then 
que não tiverem tratamento próprio. Quando fazemos isso caso
seja gerado um erro específico no then que foi tratado no
próprio then, os then posteriores são executados também. Mas
no then que foi gerado um erro específico, não será passado
nada para os futuros then, mesmo que seu retorno esteja 
certo, por isso o ideal é pormos um catch no fim pois caso
um then da frente faça uso do retorno do then passado, 
acabará caindo no catch já que tal parâmetro estará 
undefined.*/