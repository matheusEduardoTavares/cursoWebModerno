const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let x in nums){
    //if (x == 5) break
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}
//o break irá agir para o bloco + próximo dele sem ser o if
//serve somente para for, do while, while e funciona para o switch também

for (y in nums){
    if (y == 5) continue
    console.log(`${y} = ${nums[y]}`)
}
//o continue também age só no while, for, do while

//Por fim criaremos um rótulo chamado externo, que será associado ao laço for embaixo dele
externo: // o for pode estar na mesma linha
for (a in nums){
    for(b in nums){
        if (a == 2 && b == 3){
            // break >> se deixarmos só assim ele irá sair do for (b in nums) que é a estrutura que ele age + próximo dele. Caso queiramos sair do for + externo, no caso, do for (a in nums) precisamos usar o rótulo:
            break externo //ele sairá do laço associado ao rótulo externo que é o do for (a in nums)
        }
        console.log(`Par = ${a}, ${b}`)
    }
}
/*Não devemos usar estruturas for encadeadas com rótulos como fizemos acima, pois lembra muito a época do go to que deixava o código muito desorganizado e ruim. Podemos tentar trabalhar com métodos para evitar fazer uma estrutura desse tipo ou outra forma.
O ideal é ao invés de fazermos estruturas encadeadas, irmos quebrando em pequenas funções em que cada faz uma coisa, e assim o código fica + organizado e manutenível */

console.log('Fim!')