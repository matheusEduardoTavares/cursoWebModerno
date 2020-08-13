function Pessoa (nome) {
    this.nome = nome

    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

/*Temos três abordagens diferentes para criar
novos objetos: a partir de uma factory ou 
criar novos objetos a partir de uma classe 
usando o operador new, ou ainda usando o new 
para uma função construtora como foi feito
nessa aula. 
Class é um conceito muito similar de função 
construtora, pois por de baixo dos panos são
na verdade a mesma coisa. 
O factory tem benefícios porque não precisa do
this. Até poderíamos não usar o this.nome = nome
e usar direto o parâmetro nome na impressão mas
depois não podemos mais alterar esse nome pois
ele foi o parâmetro passado, assim como ocorre
na factory. Sem o this.nome se fizermos:
console.log(p1.nome) dará undefined pois não
teremos mais acesso ao nome pois ele foi o 
parâmetro que foi passado e já não existe mais.
Já com o this.nome o p1.nome retornaria o nome
esperado. Então com o this.nome é possível 
alterar o nome depois.*/
