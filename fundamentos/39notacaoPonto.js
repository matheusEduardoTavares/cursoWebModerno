console.log(typeof console) // a notação ponto usamos para acessar a função log do console que é um objeto
console.log(Math.ceil(6.1)) // Usamos ponto para acessar uma função ou atributo de 1 objeto

const obj1 = {}
obj1.nome = 'Bola' // Podemos usar essa notação para adicionar um elemento a um objeto.
// ou obj1['nome'] = 'Bola'
console.log(obj1.nome) // acessamos a chave nome dentro do obj1 usando .

function Obj(nome){
    this.nome = nome //nome associado ao objeto que for criado devido o this, tornando o atributo nome público. Se usássemos o var o escopo seria restrito a função
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira') // se não passarmos esse argumento no construtor ñ dará erro, ficará undefined
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome) // podemos acessar atributos e métodos com essa notação
obj3.exec()