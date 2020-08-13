function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
//Aula { nome: 'Bem Vindo', videoID: 123 } Aula { nome: 'Até Breve', videoID: 456 }
console.log(aula1, aula2)
/*Quando usamos o operador new é criado 1 novo
objeto e o protótipo desse objeto criado aponta
para a função que foi instanciada, no caso, 
Aula.prototype .  Isso já vimos

Agora iremos simular nosso próprio operador new
em uma função: */
//ela recebe uma função já que criaremos os 
//objetos a partie da função Aula, e receberá
//também o conjunto de parâmetros que serão passados.
/*O ... é o operador spread rest, que recebe um
conjunto de parâmetros e já concatena em um 
array */
function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params) // params já é 1 array
    return obj
}
/*Basicamente: Criamos um objeto novo com a 
notação literal de objetos, colocamos que o pai
desse objeto é o prototype da função que foi 
passada, por fim executamos tal função através
do apply para o contexto do objeto que foi
criado e passando os parâmetros para dentro desse objeto; e por fim retornamos o objeto criado que é a função do operador new: retornar um objeto da função */

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)
//Aula { nome: 'Bem Vindo', videoID: 123 } Aula { nome: 'Até Breve', videoID: 456 }, ou seja o resultado é o mesmo do de cima. Com isso podemos ver mais ou menos oque ocorre por debaixo dos panos quando usamos o operador new.
