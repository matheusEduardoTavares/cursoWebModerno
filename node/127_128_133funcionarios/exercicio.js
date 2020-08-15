const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'

const axios = require('axios')

const mulher = elemento => elemento.genero == 'F'
const china = elemento => elemento.pais == 'China'

const menorSalario = array => {
    let menor = array[0].salario
    let pos = 0
    for (let i = 0; i < array.length; i++) {
        if (menor > array[i].salario){
            menor = array[i].salario
            pos = i
        }
    }
    return array[pos]
}

axios.get(url).then(response => {
    const funcionarios = response.data
    const funcionariosMulheres = funcionarios.filter(mulher)
    const funcionariosMulheresChinesas = funcionariosMulheres.filter(china)
    const resultado = menorSalario(funcionariosMulheresChinesas)
    console.log(resultado)
})