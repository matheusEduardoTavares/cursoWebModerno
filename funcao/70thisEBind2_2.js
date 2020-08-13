//Agora resolveremos esse problema usando bind:
function Pessoa(){
    this.idade = 0

    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
    //o this amarra o this do objeto a chamada
    //da função. O this aponta para Pessoa.
    //No lugar do this poderia ser Pessoa
    //que funcionaria normalmente.
}

new Pessoa