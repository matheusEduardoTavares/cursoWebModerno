let contador = 1
while(contador <= 10){
    console.log(`contador = ${contador}`)
    contador++
}
console.log("------")

for(let i = 1; i<=10; i++){
    console.log(`contador = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < notas.length; i++){
    console.log(`nota = ${notas[i]}`)
}
//O correto é usarmos o let dentro da 
//estrutura do for, pois o let tem escopo
//de bloco, e assim ele não estará 
//disponível no resto do programa, oque
//é o ideal