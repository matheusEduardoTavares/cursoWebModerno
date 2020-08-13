// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

//se quisermos extrair a partir do objeto
//pessoa extrair a variável nome e a 
//variável idade. Podemos usar a notação
//ponto e ir adicionando isso a variáveis.
//Mas agora aprenderemos a usar o operador
//destructuring para fazer isso 

//Criamos uma const sem normear a
//constante e já colocamos chave, pois 
//isso n é um objeto, é o destructuring
const { nome, idade } = pessoa
//Basicamente oque está dentro das chaves
//é oque queremos retirar de um objeto, 
//daí atribuímos isso a estrutura que 
//queremos retirar tais coisas, que no
//caso é pessoa. Agora passamos a ter 2
//variáveis para trabalharmos no programa:
// o nome e a idade
console.log(nome, idade)

//Podemos também adicionar oque retiramos
//do objeto direto em variáveis, bastando
//por : e o nome da variavel
const { nome: n, idade: i} = pessoa
console.log(n, i)

//Se extraírmos do objeto elementos que
//não existem, ñ tem o atributo, será
//retornado undefined para elas. Porém
//podemos atribuir valores padrões p/
//não deixar o undefined bastando atribuir
//ao elemento que foi extraído o valor
//padrão que queremos que ele tenha
const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

//Agora para acessarmos os atributos 
//logradouro e numero dentro do objeto 
//endereco fazemos isso:
const {endereco: { logradouro, numero, cep } } = pessoa
// Não será criado a variável endereco pq
//selecionamos dela oque queríamos, se 
//fosse só const { endereco } = pessoa,
//aí sim teria criaod a variável endereco
//mas nesse caso só foi criado as variáveis
//logradouro, numero e cep buscadas dentro
//do objeto endereco
console.log(logradouro, numero, cep)

//se fizermos:
//const { conta: { ag, num } } = pessoa
//dará erro pois estamos tentando acessar
//os atributos ag e num de um objeto 
//conta que nem existe dentro de pessoa,
//nesse caso não dá undefined pois estamos 
//acessando um atributo de uma estrutura
//inexistente, ou seja, estamos buscando
//um método de algo undefined, e daria erro
//Ou seja, n dá para acessar um atributo
//aninhado de algo que está undefined/null