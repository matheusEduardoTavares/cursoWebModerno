//Veremos algumas formas que podemos exportar algo de dentro de 1 módulo node para ser importado por outro arquivo:
this.ola = 'Fala Pessoal' // estamos exportando o atributo ola que tem como valor Fala Pessoal
//dentro do módulo do node temos o this, veremos depois quem ele é mas com ele é possível exportar.

//Outra forma é colocando um atributo para o exports:
exports.bemVindo = 'Bem vindo ao node!'
//Tanto o this como o exports é um objeto, sabemos que um objeto em JS é uma coleção chave x valor dinâmicas, então o ola foi criando dentro do this e o bemVindo dentro do exports.

//Forma + clássica:
module.exports.ateLogo = 'Até o próximo exemplo'
//embora seja a forma clássica, não é comum exportarmos dessa forma.