//Funções anônimas podemos passar para que sejam 
//executadas por outras funções ou armazená-las 
//dentro de variáveis/constantes. São funções s/ nome
const soma = function (x, y){
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(3, 4) // 7
imprimirResultado(3, 4, soma) // 7, dá na mesma acima
imprimirResultado(3, 4, function(x, y){
    return x - y
}) // passamos uma função anônima para função
//imprimirResultado. Printará na tela -1.
//Esse tipo de recurso (passar uma função anônima)
//diretamente para outra função é bem comum em JS.
imprimirResultado(3, 4, (x, y) => x * y) // podemos
//passar uma arrow function também. Dará 12. As
//arrow functions são sempre funções anônimas enquanto
//funções normais podem ser nomeadas ou anônimas.

//podemos também colocar funções anônimas dentro de
//objetos
const pessoa = {
    falar: function(){
        console.log('Opa')
    }
    /*
    dá na mesma se fizermos:
    falar() {
        console.log('Opa')
    }
    pois na nova versão do JS essa sintaxe é válida
    */
}

pessoa.falar() // acessamos a função anônima a partir
//do atributo do objeto que definimos.
