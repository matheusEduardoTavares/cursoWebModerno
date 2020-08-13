function Pessoa(){
    this.idade = 0
    //função que dispara outra função a partir
    //do intervalo passado:
    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }, 1000)
    //o 1000 é a quantidade de milisegundos que
    //a função do primeiro argumento é disparada
    //novamente, ficando vazendo execuções
    //intervaladas.
}
/*Dentro do setInterval temos um temporizador
que fica disparando a função passada dentro
dele. Quem dispara a função é um temporizador
e não o código Pessoa, portanto ao chamar a 
função pessoa, já sabemos que o this irá 
apontar para uma coisa diferente do objeto 
Pessoa instanciado na linha abaixo, pois 
o this faz referência de onde a função é 
chamada como já vimos. */
new Pessoa //NaN. Ctrl + alt + m para o código
//em caso de loop infinito, que é oque ocorre
//nesse caso pois o this.idade++ não está 
//apontando p/ a idade que está dentro de Pessoa
//, n aponta para o objeto pessoa pois quem está
//disparando a chamada dessa função é um temporizador
//e n o objeto pessoa.

