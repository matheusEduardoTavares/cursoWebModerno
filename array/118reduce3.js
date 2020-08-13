Array.prototype.reduce2 = function (callback){
    let resultado, atual;
    for (let i = 0; i < this.length; i++){
        atual = i + 1;
        if (resultado === undefined) resultado = this[0]
        if (atual == this.length){
            return resultado
        }
        else{
            resultado = callback(resultado, this[atual])
        }
    }
    return resultado;
}

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota:9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true}
]

const resultado2 = alunos.map(a => a.nota).reduce2(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado2)