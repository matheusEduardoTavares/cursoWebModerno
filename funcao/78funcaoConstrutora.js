// a ideia é criar a função com parâmetros e 
//atribuindo valores padrão aos parâmetros
function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado:
    let velocidadeAtual = 0 // pertence apenas a função carro
    //não há como acessar diretamente objeto.velocidadeAtual
    //pois esse é 1 atributo interno da função

    //método público, devido ao this:
    this.acelerar = function(){
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        }
        else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    //método público para pegar o atributo privado:
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
    //o this torna público, é visível fora da função
    //construtora.

    this.teste = "SI" // atributo público
}

const uno = new Carro // podia ter o ()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar() // 20
ferrari.acelerar() // 40
ferrari.acelerar() // 60
console.log(ferrari.getVelocidadeAtual())
console.log(ferrari.teste)

console.log(typeof Carro) // function
console.log(typeof ferrari) // object

/*Portanto a função é como um molde e a partir dela
podemos criar quantos objetos quisermos e o dado 
interno daquela função pertence a cada um dos objetos
mesmo que seja um dado privado ou público (this).*/