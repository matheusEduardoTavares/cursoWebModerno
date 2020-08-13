// usando a notação literal
const obj1 = {} // a partir das chaves
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
//function object. Podemos ou não por os 
//parênteses no new Object para passarmos 
//argumentos para seu construtor

const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desc){
    this.nome = nome // torna o nome publico,
    //ou seja, ñ está encapsulado, está visível
    //para fora do objeto
    /*Em JS temos o nível de visão global, do
    módulo que representa o arquivo (module.exports)
    e o nível da função. No Browser e no node
    a partir do let e do const temos a visibilidade
    que pertence somente ao bloco. No Browse 
    temos o escopo global, da função e o escopo
    de bloco a partir de variáveis definidas
    com o let e com o const. Com encapsulamento
    tentamos diminuir o máximo possível o nível
    de visibilidade de uma determinada variável.
    No caso, preco e desc ficarão encapsulados,
    não serão visíveis para fora, mas o nome
    será visível para fora então podemos o 
    alterar por fora. Um atributo interno dentro
    da função é privado. Ou seja, nome é 
    público devido ao this, e preco e desc é
    privado, pois em JS só temos a ideia de 
    público e privado e de bloco (let e const).
    O this além de ser público, faz referência
    a instância, então quando criarmos uma nova
    instância de produto, o nome passado estará
    visível nessa instância que foi criada. A
    partir do momento que criamos um produto,
    não conseguimos alterar depois o preço nem
    o desconto já que são privados, tem escopo
    somente dentro da função.*/

    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

/*Tanto no new Object quanto no new Produto temos
funções construtoras, a única diferença é que o
Object já vem na linguagem JS, e o Produto é
uma função que nós mesmos criamos. */

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
//Podemos acessar tanto o nome de p1 e de p2 
//através do p1.nome e p2.nome assim como podemos 
//acessar o método que é publico, o getPrecoComDesconto
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory
// podemos usar tanto uma função construtora
//interna quanto uma notação literal.
// Factory é 1 padrão de projeto, uma função q
//fabrica um objeto
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

/*Outra forma de criar um objeto é usando uma
função chamada create, então criamos um objeto
usando:
Object.create
Mas não nos aprofundaremos agora nela pois iremos
ver ela quando estivermos falando de herança:  */
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha) // {nome: 'Ana'}

/*A última forma de criar um objeto é a partir
de uma função famosa que retorna um objeto:
json.parse , que é transformarmos um JSON em
um objeto. */
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info) // o fromJSON virou
//um objeto. {info: "Soum um JSON"}
//JSON é texto e objeto é objeto.
