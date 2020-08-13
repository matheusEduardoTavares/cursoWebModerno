class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()

/*O problema é que se pegarmos o mesmo código
da classe e executarmos no browser funcionará
, mas se fizermos:
document.getElementsByTagName('body')[0].onclick = p1.falar
e clicarmos no body irá aparecer meu nome é
undefined, isso porque como já vimos o this 
varia de onde for chamado no browser. Isso já
não ocorre com a função factory pois dentro de 
p2.falar() não precisamos acessar o this, pois
o objeto que é retornado tem ciência do 
contexto léxico no qual ele foi declarado. Ele
tem acesso ao escopo mais abrangente, então
mesmo tendo acesso apenas ao objeto ele tem
acesso a variável do método no qual esse 
objeto foi criado. O uso dessa função nesse
contexto é mais determinístico.*/
