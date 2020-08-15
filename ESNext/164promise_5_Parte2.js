//Podemos trabalhar com try catch dentro da função 
//que retorna as promises também:
function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try{
            con.log('temp') // isso gera 1 erro
            if (Math.random() < chanceErro){
                reject('Ocorreu um erro!')
            }
            else{
                resolve(valor)
            }
        }
        catch (e) {
            reject(e)
            //Só cairá nesse reject do catch se algo dentro
            //do try conter erro.
        }
    })
}

// funcionarOuNao('Testando', 0.5)
//     .then(v => `Valor: ${v}`)
//     .then(
//         v => consol.log(v),
//         err => console.log(`Erro específico: ${err}`)
//     )
//     .then(() => console.log('Quase Fim!'))
//     .catch(err => console.log(`Erro: ${err}`))
//     .then(() => console.log('Fim!'))
//Nesse sentido dará erro por causa do con.log, e o 
//primeiro erro que será alertado é no segundo then, então
//mostrará o erro específico, aí continuará seu fluxo
//executando os 2 then posteriores que só printam algo na 
//tela e o catch.
//Resultado:
// Erro específico: ReferenceError: con is not defined
// Quase Fim!
// Fim!

//Sem o err => console.log(`Erro específico: ${err}`) do
//then, já que nenhum then trata erro, irá cair direto no
//catch e por fim executará o then posterior a ele.
funcionarOuNao('Testando', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => consol.log(v),
        //err => console.log(`Erro específico: ${err}`)
    )
    .then(() => console.log('Quase Fim!'))
    .catch(err => console.log(`Erro Geral: ${err}`))
    .then(() => console.log('Fim!'))
//REsultado:
// Erro Geral: ReferenceError: con is not defined
// Fim!
//Com um tratamento no then, ele executa o tratamento 
//daquele then específico, e executa os then posteriores
//caso nenhum gere erro.