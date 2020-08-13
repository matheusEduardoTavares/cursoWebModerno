class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho) // Filho { sobrenome: 'Silva', profissao: 'Professor' }

// É uma forma mais parecida como é em outras linguagens.

console.log(filho.__proto__ === Filho.prototype) // true
console.log(Filho.prototype.__proto__ === Pai.prototype) // true
console.log(Pai.prototype.__proto__ === Avo.prototype) // true
console.log(Avo.prototype.__proto__ === Object.prototype) // true
console.log(Avo.__proto__ === Function.prototype) // true
console.log(Pai.prototype.__proto__ === Object.prototype) // false
console.log(Pai.prototype.__proto__ === Function.prototype) // false
console.log((new Filho).__proto__) // Filho {}
console.log((new Pai).__proto__) // Pai {}
//Ou seja, quando analisamos somente quem é o pai da classe, como em Avo.__proto__ , temos que seu pai é Function.prototype, pois embora sejam classes são funções por debaixo do pano. Mas se analisarmos quem é o pai da classe segundo a hierarquia, ou seja, o pai da classe.prototype teremos que é quem ele extende, e no caso do Avo que não extende ninguém, é o Object.prototype. Resumindo: Ao testarmos quem é o pai da classe, é sempre a Function pois eles são funções, mas se testarmos quem é o pai da cadeia de protótipo da classe, ou seja, o __proto__ da classe.prototype, é sempre quem ele extende, e se não extender ninguém é o Object.prototype que é pai de todos.

