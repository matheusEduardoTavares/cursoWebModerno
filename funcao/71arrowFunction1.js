let dobro = function(a){
    return 2 * a
}

//mesma coisa de:
dobro = (a) => {
    return 2 * a
}

//quando temos apenas 1 linha de função fazemos:
dobro = a => 2 * a
//é interessante termos funções de uma única linha pois
//elas são bem específicas e por isso são boas para
//reutilizá-las, além de tornar o código + funcional
//e manutenível. O return está implícito

console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

//mesma coisa de: 
ola = () => 'Olá' // função sem parâmetro
ola = _ => 'Olá' // função com parâmetro
//nesse caso o underline vira um parâmetro mas se
//quisermos uma função sem parâmetros é só não usar
//o underline
console.log(ola())

/* É interessante usarmos função arrow sempre que
possível principalmente em caso de uma única linha.
A função arrow é bem usada no paradigma funcional, 
onde podemos fazer grandes encadeamento de pequenas
funções para fazermos algo complexo. */
