// estrategia 1 para gerar valor padrão
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
    /*Basicamente se retornar false então
    a variável recebe 1, se não a variável
    recebe o valor do parâmetro. Com o 
    operador OU conseguimos fazer isso.
    Mas isso gera alguns efeitos colaterais */
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

// estategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c){
    a = a !== undefined ? a : 1
    //usando o !== só o undefined n entra
    //com o != o null tb n entra, tudo que
    //for false n entra
    b = 1 in arguments ? b : 1 // aqui estamos vereficando se há o índice 1 no arguments, ou seja, se o argumento para o parâmetro b foi passado, pois o do a é o índice 0
    c = isNaN(c) ? 1 : c
    //se não for um número retorne 1, se não retorne c. Essa última estratégia é a + segura, pois queremos somar valores, então precisamos de números
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// valor padrão do es2015
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))