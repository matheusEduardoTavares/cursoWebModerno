function soma(){
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma()) //0
console.log(soma(1)) //1
console.log(soma(1.1, 2.2, 3.3)) //6.6
console.log(soma(1.1, 2.2, "Teste")) // 3.00000...3Teste
//ele soma o 1.1 com 2.2 e concatena isso com Teste e o fato de não dar exato 3.3 já vimos que é a imprecisão
console.log(soma('a', 'b', 'c')) //0abc , pois inicialiamos soma com 0
/* Como vimos podemos passar tipos 
diferentes como argumentos numa mesma 
chamada.
Embora o arguments seja interessante, agora
há o operador sprad que já foi citado que
é + atual e é a melhor forma de fazer isso.
Veremos depois */