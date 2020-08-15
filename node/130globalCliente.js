//Para que o objeto MinhaApp seja colocada no global, precisamos executar o arquivo global.js, por isso iremos requerí-lo aqui já que é somente o arquivo globalCliente.js que será executado.
require('./130global') // não vamos atribuir isso a nenhuma variável, tanto que no global.js nem retornamos nada, não exportamos nada. Aqui só serve para que o global.js seja carregado e o MinhaApp vá para o global. Em outros arquivos n é mais preciso requerer o global, basta fazer isso uma única vez dentre os arquivos que serão executados e oque foi adicionado ao global vai ir para o global de fato.

console.log('-------------')
console.log(MinhaApp.saudacao()) // Estou em todos os lugares!
console.log(global.MinhaApp.saudacao()) // das 2 formas funcionam

//Até podemos usar o global como fizemos mas devemos ter cuidado e usar somente em exceções pois o padrão é usar o sistema de módulos. 

MinhaApp.nome = 'Eita!' //como é global podemos mudar qualquer coisa
console.log(MinhaApp.nome) // Eita!
//Uma alternativa para evitarmos essa mudança é usar o freeze, bastaria colocarmos antes das chaves Object.freeze( e depois das chaves o ) , assim o objeto fica congelado e mesmo se alterar não irá mudá-lo.