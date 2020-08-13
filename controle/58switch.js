const imprimirResultado = function (nota) {
    switch (Math.floor(nota)){
        //a expressão é um valor, n retorna true ou false
        case 10: // os cases comparam o valor da expressão
        case 9:
            console.log('Quadro de Honra')
            break
        //Temos um problema no switch pois o switch padrão é passarmos um valor, aí temos cada case com seu próprio código
        //Uma vez executado o case, ele sai executando todos outros cases abaixo, um comportamento chamado de for true.
        //O comportamento + adequado seria ele executar somente o case que ele entra e ignore o resto. Para termos esse 
        //comportamento por padrão não vem, precisamos usar o break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4: {
            console.log('Recuperação')
            break
        }
        //Até podemos por as sentenças de código referente a cada case dentro de um bloco de códigos, {}, é opcional ambos funcionam igual mas
        //isso comumente não é usado, já que nos cases não precisa de bloco de código, mesmo se houver + de 1 sentença ele entende que pertence
        //ao case que está associado
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
        //O switch não possui intervalos, só testa os valores
        // os break que colocamos não sai da estrutura imprimirResultado, sai só do switch mesmo
        // o default n precisa ficar no fim, pode ficar em qualquer posição, mas caso ele não esteja no fim, é preciso por break nele
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)