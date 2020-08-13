const a = 1
const b = 2
const c = 3

//antes eramos obrigados a fazer:
const obj1 = { a: a, b: b, c: c }

//mas agora é possível fazer sem duplicidade:
const obj2 = { a, b, c }
//mas se quisermos mudar o nome do atributo aí
//precisamos fazer da primeira forma acima
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3) // { nota: 7.87 }

//podemos por o colchete dentro das chaves
//nos objetos também:
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

//a forma antiga de definir funções dentro 
//de chaves é a forma padrão chave e valor
const obj5 = {
    //essa é a function expression
    funcao1: function(){
        // ...
    },
    //na forma nova no ECMASCRIPT basta por 
    //direto a função:
    funcao2(){
        //..
    }
}

console.log(obj5)
