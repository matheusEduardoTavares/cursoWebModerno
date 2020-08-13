// Closure é o escopo criado quando uma função é
// declarada. Quando definimos a função é 
//criado 1 escopo em volta onde a função foi
//declarada, e esse escopo vai permitir
//acessar as variáveis que foram declaradas
//externas a função. Essas variáveis externas
//declaradas a função tem haver com a questão
//do contexto léxico, contexto no qual a 
//função foi declarada dentro, fisicamente no
//nosso código.

// Contexto léxico em ação:

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}
//A função fora retorna a função dentro. No
//lugar da função dentro poderíamos ter 
//retornado direto ou usar uma função anônima
//e a retornado.

const minhaFuncao = fora()
console.log(minhaFuncao())
/*É printado Local. O contexto léxico da função
dentro é a função fora, pois ele foi declarado
dentro dela. Nesse escopo da função fora, temos
a constante x valendo Local. Uma função em JS
é um closure pois ela tem memória do local que
foi definida, e esse escopo externo à função
também vai junto quando acessamos a função, ou
seja, esse closure também vai junto quando
chamamos a função. Por conta disso a variável
global não será acessada.
Então com funções em JS temos acesso até mesmo
ao escopo que é criado quando uma função é
declarada. Isso é muito importante para JS*/