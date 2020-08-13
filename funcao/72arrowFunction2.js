function Pessoa(){
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa
/*Nesse caso o this não varia, no contexto em que a 
função setInterval foi escrita é o contexto da 
função Pessoa pois está dentro desta função. Chamamos
isso de contexto léxico, da palavra, do local físico
que ele foi escrito dentro do código fonte. Independente
do código ser chamado de dentro do temporizador o 
resultado é o esperado, vai incrementando de 1 em 1
de segundo em segundo. */
