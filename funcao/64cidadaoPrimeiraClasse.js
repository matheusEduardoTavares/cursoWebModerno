// Função em JS é First-Class Object (Citizens)
// Higher-order function >> função de alta ordem

//Criando função de forma literal:
// o bloco e os parênteses são obrigatório
function fun1() {  }

// Armazenar em uma variável
// a função é anônima
const fun2 = function () {}

// Armazenar em um array
//podemos armazenar em um array função de 2
//formas, colocando a função anônima inteira
//ou colocando o nome da função de forma
//literal ou de uma variável associada a
//função dentro dos colchetes
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// Passar função como parâmetro
function run (fun) {
    fun() // aqui a função é executada
}

run(function () {console.log('Executando...') })
// aqui só passamos a função como parâmetro ainda n executamos

// Uma função pode retornar/conter uma função
function soma(a, b){
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
//o retorno do soma(2, 3) é uma função, 
//então basta por outro parênteses para 
//passar os parâmetros para função que foi
//retornada.
//Nesse caso o mais comum era retornarmos
//só a soma de a + b e depois chamar 
//uma outra funcao passando a soma de a com b
// + c e retornando esse resultado
const cincoMais = soma(2, 3)
cincoMais(4)