const sequencia = {
    _valor: 1,
    //o fato de por o underline antes da variável
    //não a torna privada, mas é uma convenção
    //mostrando que queremos que essa variável
    //deve ser acessada só internamente pois a
    //ideia é que ela seja privada.
    get valor(){
        return this._valor++
    },
    /*Ao acessarmos atributos com métodos podemos
    fazer algum tipo de validação, processamento
    antes de trabalhar com valor da variável */
    //set valor(valor){ this._valor = valor }
    /*JS não aceita sobrecarga de métodos, a não
    ser para o get e set que usamos o mesmo nome
    do atributo que alteraremos que é valor no caso */
    //Podemos fazer uma validação para o valor, ex:
    set valor(valor){
        if (valor > this._valor){
            this._valor = valor
        }
        //só atribui ao atributo valor se 
        //o número passado for maior que o valor
        //pois a ideia é que o atributo valor
        //sempre vá aumentando, não diminuindo
    }
}

/*Para chamar o método get, basta tratarmos ele
como atributo e o JS percebe que queremos o get */
console.log(sequencia.valor, sequencia.valor) // 1 2
sequencia.valor = 1000 // atribuindo algo direto
//ao atributo valor ele entende que é o set
console.log(sequencia.valor, sequencia.valor) // 1000 1001
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor) // 1002 1003
