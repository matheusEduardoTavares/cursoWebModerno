const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return (func.salario < funcAtual.salario) ? func : funcAtual
} // No caso o acumulador será um funcionário pois no fim iremos retornar um funcionário mesmo

axios.get(url).then(response => {
    const funcionarios = response.data

    // mulher chinesa com menor salário?
    const func = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario)

    console.log(func)
})

//No fim acessamos um JSON remoto de um website, mas poderia ser um webservice também.