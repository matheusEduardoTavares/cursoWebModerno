//Padrão de import do ECMAScript:
import { Carro, Vendavel } from './produto'

//O parâmetro v é do tipo Vendavel, dessa interface
function exibir(v: Vendavel) {
    console.log(`${v.nome} custa ${v.preco}!`)
}

const c = new Carro
c.nome = 'Civic'
c.preco = 89499.00
exibir(c)
//Nativamente o node não executa um arquivo Typescript,
//precisamos fazer um transpile, transpilar de TS para JS.