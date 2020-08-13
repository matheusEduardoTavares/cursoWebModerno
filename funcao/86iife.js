// IIFE -> Immediately Invoked Function Expression
//expressão de função imediatamente invocada

//definimos 1 função anônima dentro de parênteses:
(function(){
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!') // aqui é escopo local
})() // colocando os parênteses aqui já a executamos
/*Como colocamos a função dentro de parênteses
já podemos imediatamente chamar a função,
colocando os parênteses no final. Pode haver
oque quisermos dentro dessa função e não
estaremos em nenhum momento tocando o escopo
global a não ser que acessemos algo 
usando window dentro dessa função. 
Existem outras formas de criarmos módulos sem
mesmo usar as novas versões do ECMAScript com
objetos mas veremos isso depois.*/
