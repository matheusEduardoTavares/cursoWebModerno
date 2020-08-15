/*
Promise é um recurso novo e bastante interessante.
É uma promessa, a utilizamos quando queremos ter algum
tipo de processamento assíncrono. A promise tem 2 grandes
destinos: (tem +, mas 2 são os principais) que é quando a 
promessa é atendida (cumprida) ou quando a promessa é rejeitada
. Por exemplo: Queremos acessar um arquivo que está remoto.
Podemos acessar esse arquivo por meio de uma callback que
passamos por exemplo a URL, passando uma callback de 
sucesso e uma de erro. Se o arquivo for obtido com sucesso
chamamos a callback de sucesso, e se falhar chamamos a de
erro, descrevendo o problema. Esse cenário com a callback é
a mesma ideia da promise: podemos ter o sucesso / erro.

A promise é uma estrutura que representa uma operação 
assíncrona. A promessa pode ser atendida ou rejeitada a 
depender da condição, até existe alguns outros cenários mas
veremos só mais a frente.
*/

//Criaremos um exemplo simples usando o setTimeout para 
//representar o assíncrono, uma operação que demora um
//determinado tempo e quando a resposta chega aí a promise
//é resolvida.
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
    //usamos o segundos * 1000 porque o sitTimeout seu 
    //tempo é dado em milisegundos.
}
//nos parâmetros poderíamos receber uma callback que 
//seria a callback a ser chamada quando determinada 
//quantidade de segundos for executada.
/*
Mas colocamos para ela retornar uma promise, que é um objeto.
Esse objeto vai receber uma callback, 1 arrow
function que recebe 2 parâmetros chamado resolve e reject. 
Resolve e reject são os 2 nomes + usuais, e basicamente ambos
são funções que são chamadas. O resolve é chamado quando a
promessa é atendida, dá tudo certo, e o reject quando queremos
rejeitar o atendimento dessa promessa por algum motivo, algum
erro ou uma situação anormal que tenha acontecido. Chamamos a
função setTimeout para simular o delay.
Resumindo: temos 1 função que recebe 2 parâmetros e retorna
uma promessa. Essa promessa é a execução do setTimeout.
Quando a promessa for atendida seŕa chamado o resolve.
Para acessar a promise, pegar a frase que foi passada para 
o resolve, faremos:
*/
//falarDepoisDe(3, 'Que Legal!').then(frase => frase.concat('?!?'))
//a função then nos permite acessar o que foi passado para o 
//resolve.
//Podemos com o then encadear várias chamadas uma depois da
//outra. Então podemos fazer isso:
falarDepoisDe(3, 'Que Legal!').then(frase => frase.concat('?!?'))
.then(outraFrase => console.log(outraFrase))
/*
Quando retornamos a promise, ela tem a função then, e essa
função then é chamada quando resolvemos a promise passando
o objeto que desejamos que seja passado para a função then.
Portanto o parâmetro frase da função falarDepoisDe que passamos
para o resolve, será o mesmo parâmetro frase do primeiro then.
Podemos encadear vários then, quantos quisermos, e o resultado
de um then vai sendo passado para outro.
A promise aceita um único parâmetro, se passarmos qualquer 
outro parâmetro, será undefined. Se quisermos passar várias
coisas para o resolve, será preciso passar uma estrutura
que dentro dela tenha tudo que queremos, como um objeto 
e dentro dele ter tudo que queremos passar por exemplo.
*/