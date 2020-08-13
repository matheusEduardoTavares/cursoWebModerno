Number.prototype.entre = function (inicio, fim){
    //Como estamos usando o Number podemos usar o this para acessar o valor atual
    return this >= inicio && this <= fim // então se o this estiver entre o início e o fim incluindo o início ou fim ele retorna true
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)){
        console.log('Quadro de Honra')
    }
    else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')
    }
    else if (nota.entre(4, 6.99)){
        console.log('Recuperação')
    }
    else if (nota.entre(0, 3.99)){
        console.log('Reprovado')
    }
    else {
        console.log('Nota Inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)