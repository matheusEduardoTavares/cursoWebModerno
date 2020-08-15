/*
Faremos outro exemplo de tagged template
que é mais usado, onde controlaremos o 
parser de uma template string.
*/

/*
Olhando o resultado do arquivo anterior:
[ '', ' está ', '.' ]
[ 'Gui', 'Aprovado' ]
Para a partir dos 2 arrays voltar ao valor
original, basta concatenar cada índice,
então por exemplo no índice 0 temos '' e
Gui, concatenando eles fica Gui, depois no
índice 1  está  e Aprovado, concatenando
fica:
Gui está Aprovado
Então é assim que voltamos ao original,
juntamos primeiro a parte do índice x com
o valor do índice x.
*/

function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    resultado.push(partes[partes.length - 1])
    //A linha 29 serve para adicionar o . da
    //partes que estava no final e que não era
    //adicionado.
    //Mas o ideal seria verificar qual 
    //array é maior, o partes ou o valores
    //e usar o forEach para o que for 
    //maior, pois aí não faltará nada.
    return resultado.join('')
}

const preco = 29.99
const precoParcela = 11

//Com tagged template:
console.log(real `1x de ${preco} ou 3 x de ${precoParcela}.`)
//1x de R$29.99 ou 3 x de R$11.00.

//Sem tagged template:
console.log(`1x de ${preco} ou 3 x de ${precoParcela}.`)
//1x de 29.99 ou 3 x de 11.