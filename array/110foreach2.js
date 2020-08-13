Array.prototype.forEach2 = function(f){
    for (aprovado in this){
        f(this[aprovado], parseInt(aprovado, 10), this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
    console.log(array)
})
