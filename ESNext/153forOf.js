/*
Temos mais um tipo de laço for, o for of que é relativamente
novo.
*/

//O for of itera em cima de valores, mas ainda sim o 
//map filter e reduce são + interessantes, mas esse é
//até bem usado também.

for (let letra of "Cod3r") {
    console.log(letra)
}
/*
C
o
d
3
r
*/
const assuntosEcma = ['Map', 'Set', 'Promise']
for (let i in assuntosEcma){
    console.log(i)
}
/*
0
1
2
*/

for (let assunto of assuntosEcma) {
    console.log(assunto)
}
/*
Map
Set
Promise
*/

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordardo:false}]
])

//for (let [c, v] of assuntosMap){
//podíamos usar o for acima tb, usando destructuring
//como fizemos na linha 78
for (let assunto of assuntosMap){
    console.log(assunto)
}
/*
[ 'Map', { abordado: true } ]
[ 'Set', { abordado: true } ]
[ 'Promise', { abordardo: false } ]
*/

//Podemos percorrer só as chaves do map:
for (let chave of assuntosMap.keys()){
    console.log(chave)
}
/*
Map
Set
Promise
*/

//Podemos percorrer só os valores do map:
for (let chave of assuntosMap.values()){
    console.log(chave)
}
/*
{ abordado: true }
{ abordado: true }
{ abordardo: false }
*/

//Podemos percorrer pelo .entries e ainda usar destructuring:
for (let [ch, vl] of assuntosMap.entries()){
    console.log(ch, vl)
}
/*
Map { abordado: true }
Set { abordado: true }
Promise { abordardo: false }
*/

//Com for of conseguimos percorrer strings, arrays, maps,
//e sets

const s = new Set(['a', 'b', 'c'])
for (let letra of s){
    console.log(letra)
}
/*
a
b
c
*/