Array.prototype.reduce2 = function (callback, valor){
    let resultado, atual;
    for (let i = 0; i < this.length; i++){  
        if (valor === undefined){
            resultado = this[0];
            atual = 1
        }
        else if (i === 0){
            resultado = valor
            atual = 0
        }
        else{
            atual += 1; 
        }
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

const resultado3 = alunos.map(a => a.nota).reduce2(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 10)

console.log(resultado3)