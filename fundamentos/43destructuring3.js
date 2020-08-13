//Aqui estamos usando o operador destructuring
function rand({ min = 0, max = 1000 } = {}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

//Aqui estamos usando um objeto: 
const obj = { max: 50, min: 40 }
console.log(rand(obj))

//Podemos passar apenas o valor de minimo ou de maximo:
console.log(rand({ min: 955 }))

console.log(rand({}))

//console.log(rand()) -> dá erro
//pois estamos tentando desestruturar algo
//que está undefined, pois está tentando
//pegar elementos de um objeto que não
//existe, não foi passado como argumento.
//Para evitar esse erro podíamos fazer isso:
//function rand({ min = 0, max = 1000 } = {}){
//aí funcionaria

console.log(rand())