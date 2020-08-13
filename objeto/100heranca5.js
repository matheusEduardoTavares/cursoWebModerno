//tudo dá function:
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

/*Portanto todos eles tem o atributo prototype e o proto */
console.log(String.__proto__ === Function.prototype) //true

String.prototype.reverse = function() {
    //o array tem a função reverse que inverte
    //todos elementos
    /* Com o this conseguimos acessar o elemento
    que chama a função.
    console.log('this.split = ' + this.split(''))
    E,s,c,o,l,a, ,C,o,d,3,r
    console.log('this.reverse = ' + this.split('').reverse())
    r,3,d,o,C, ,a,l,o,c,s,E
    */
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())
//r3doC alocsE
//No caso, o this dentro da funçaõ reverse 
//representa a string Escola Cod3r que é quem
//chama a função reverse

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first()) // 1
//aqui o this é o array [1, 2, 3, 4, 5] que
//é quem chama a função

console.log(['a', 'b', 'c'].first()) // a

/*Devemos tomar cuidado ao mexer em funções que
já estão presentes em algum protótipo, por ex: */
String.prototype.toString = function () {
    return 'Lascou tudo'
}
//assim conseguimos alterar o comportamento da
//função toString que já vem presente no array
//por padrão. Jamais devemos fazer isso, pois
//pode gerar muitos efeitos colaterais já que
//estamos sobrescrevendo um comportamento padrão
//da linguagem. Devemos até mesmo tomar cuidado
//ao adicionar novos comportamentos.

//Ao mudarmos o toString, acabamos alterando uma
//série de funções daquele tipo, por exemplo:
console.log('Escola Cod3r'.reverse())
//odut uocsaL
//Ele inverte o lascou tudo, não o elemento que
//chama a função.
