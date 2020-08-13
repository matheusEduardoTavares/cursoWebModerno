console.log(typeof Object)
console.log(typeof new Object) // aqui é como chamar o construtor. Podemos ou não omitir os parênteses depois do object

const Cliente = function(){}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto{} // ES 2015 (ES6)
console.log(typeof Produto) // uma classe é um sintaxe sugar, é só uma forma diferente de escrever mas isso na verdade é 1 função 
console.log(typeof new Produto()) // todos esses exemplos são instâncias de funções. Podemos omitir os ()
// A função em JS pode definir uma classe, essa classe em JS embora seja uma função, funciona igual as classes em outras linguagens
// Quando criamos um objeto de forma literal, estamos instanciando um objeto.
// Em JS podemos instanciar funções a partir do new, podemos criar instâncias de funçãos que nós mesmos definimos, ou criar instâncias a patir de 1 classe
// Portanto quem exerce as funções de classe no JS é na verdade uma função, que por sua vez pode ter atributos e comportamentos, e essas funções podem ser instanciadas
