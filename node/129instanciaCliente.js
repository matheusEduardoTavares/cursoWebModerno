const contadorA = require('./129instanciaUnica')
const contadorB = require('./129instanciaUnica')

const contadorC = require('./129instanciaNova')() //já chamamos e executamos a função, ou seja, invocamos a função factory direto para que seja gerado um objeto que provém da função e fique armazenado no contadorC

const contadorD = require('./129instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor) // 3 como é feito cache já que não é uma função factory, o contadorB que provém do mesmo módulo do contadorA que não usou função factory compartilharam o mesmo valor. Era pra ser 1 que é o valor original, enquanto o contadorA era pra ser 3.
console.log(contadorA.valor) // 3

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor) // 3
console.log(contadorD.valor) // 1
//Ou seja, o contadorA e o contadorB partilham o mesmo valor devido ao cache do módulo. Já o contadorC e o contadorD não partilham o mesmo valor pois são novas instâncias geradas a partir de uma factory.
