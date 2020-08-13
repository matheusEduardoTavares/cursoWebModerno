function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwaise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

/*
return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
A linha 12 = linha 14
return { comprarSorvete: comprarSorvete, comprarTv50: comprarTv50, comprarTv32: comprarTv32, manterSaudavel: manterSaudavel }
ou ainda poderíamos adicionar chaves que quiséssemos para cada valor
*/

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))