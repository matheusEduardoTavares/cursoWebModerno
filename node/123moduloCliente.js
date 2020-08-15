//Para importarmos algo com o Commons JS que é o sistema de módulo do node usamos a palavra require.

const moduloA = require('./123moduloA') // o ./ pois estamos referenciando um módulo presente dentro do nosso sistema e por isso estamos usando o caminho relativo. Existem outras formas de importarmos módulos de terceiros aí não precisamos do caminho relativo.

const moduloB = require('./123moduloB')

//Oque foi exportado do módulo A, que é os atributos ola, bemVindo e ateLogo , tudo isso estará armazenado dentro da constante moduloA, e o que foi exportado do módulo B está na constante moduloB que tem um atributo bomDia e uma função chamada boaNoite. Agora usaremos oque foi exportado:

console.log(moduloA.ola) //Fala Pessoal
console.log(moduloA.bemVindo) //Bem vindo ao node!
console.log(moduloA.ateLogo) //Até o próximo exemplo
console.log(moduloA)
/*{
    ola: 'Fala Pessoal',
    bemVindo: 'Bem vindo ao node!',
    ateLogo: 'Até o próximo exemplo'
  }
*/
//Com isso podemos entender que, segundo o módulo A, o this é a mesma coisa do exports que é a mesma coisa do module.exports. Estamos colocando 3 atributos diferentes no mesmo objeto.


console.log(moduloB.bomDia) // Bom Dia
console.log(moduloB.boaNoite()) // Boa noite
console.log(moduloB) // { bomDia: 'Bom Dia', boaNoite: [Function: boaNoite] }
//No caso do módulo B, estamos substituindo o objeto vazio padrão (o module.exports por default é vazio no arquivo a menos que coloquemos algo lá) por um novo objeto. Se fizermos somente exports = e colocarmos o novo objeto o resultado não será oque esperamos.

//Resumindo: Qualquer 1 das 4 exportações são válidas, mas caso queiramos atribuir um novo objeto direto para ser exportado, devemos usar somente o module.exports, pois se usássemos o this ou o exports e atribuíssemos direto o objeto, os atributos ficariam undefined.

//Essa é a forma de usar o sistema de módulos do node, o Commons JS, aquilo que exportamos para fora do módulo é oque será visível para fora, qualquer coisa coisa que não exportarmos não é visível para fora, assim como a variável let a que criamos no moduleB.js não é visível aqui. E para termos acesso ao que foi exportado devemos usar o require. E para exportar módulos físicos, ou seja, que estão nas nossas pastas, devemos usar o caminho relativo, então sempre tem que começa com ../ ou ./ . Nem é preciso por a extensão do arquivo .js na hora de importar pois por padrão é .js , mas podemos por que dará na mesma. Podemos ter um sistema com muitos arquivos e a ideia é a mesma. Para exportar arquivos de terceiros, ou seja, que não estão na nossa pasta, não colocamos o caminho relativo (não começa com ./ nem ../) é só o nome do módulo.