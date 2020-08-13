const imprimirResultado = function(nota) {
    if (nota >= 7){
        console.log('Aprovado!')
    }
    else{
        console.log('Reprovado!')
    }
    //Como há apenas 1 sentença de código tanto no if quanto no else n precisa das chaves
    //devemos lembrar de não usar ; para o else também, em nenhuma estrutura de controle
}

imprimirResultado(10)
imprimirResultado(4)

//devemos ter cuidado com o fato de JS ser fracamente tipado:
imprimirResultado('Epa!') // cuidado!!
//Isso não dará erro, simplesmente verá que uma string n pode ser >= a 7 e cairá no else, e imprimirá reprovado
//Existem ferramentas para testarmos se isso é um valor numérico, e com base nisso poderíamos jogar uma exceção, um erro, mas veremos isso depois, e precisamos tomar cuidado com isso