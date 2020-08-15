//Se colocarmos reject no lugar do resolve
//dará o seguinte erro:
/*
UnhandledPromiseRejectionWarning: Testando
(Use `node --trace-warnings ...` to show where the warning was created)
(node:14460) UnhandledPromiseRejectionWarning: Unhandled promise rejection. 
This error originated either by throwing inside of an async function without a catch block,
or by rejecting a promise which was not handled with .catch(). To terminate the
node process on unhandled promise rejection, use the CLI flag 
*/
//Ou seja, precisamos tratar esse erro. E a forma de tratálo é 
//usando o método .catch que colocamos depois
//dos then. Chamamos uma única vez o catch
//para fazer o tratamento do erro. Tanto se
//cair no reject quanto se ocorrer qualquer
//erro em algum dos then, quem será executado
//é o catch.
function falarDepoisDe (segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(frase)
        }, segundos * 1000)
    }) 
}

falarDepoisDe(3, 'Que legal!')
.then(frase => frase.concat('?!?'))
.then(outraFrase => console.log(outraFrase))
.catch(e => console.log(e))
/*
O parâmetro e do catch é a mensagem de 
erro. Como é o conteúdo do parâmetro 
frase que estamos mandando para o reject
é ele quem receberemos no parâmetro e.
*/
/*
Percebemos que quando está no reject o 
resultado é : Que legal!, pois os then nem
chegam a ser executados. Já quando colocamos
resolve no lugar de reject, o resultado é:
Que legal!?!?
Portanto é o resolve quem chama a função then
, e quem chama a função catch é o reject
ou algum possível erro.
*/