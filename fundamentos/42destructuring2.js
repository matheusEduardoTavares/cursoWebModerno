//Assim como nos objetos, criamos uma 
//variável ou constante e já abrimos os
//colchetes agora pois faz referência ao
//array, aí atribuímos a isso o array
const [a] = [10]
console.log(a)
//temos que prestar atenção pois se
//deixássemos o a sem os colchetes 
//estaríamos definindo um array e não
//usando o destructuring

//Podemos usar isso com vários elementos:
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
//Podemos ir pulando elementos que não 
//queremos definir dentro do destructuring
//colocando 2 vírgulas seguidas como acima
console.log(n1, n3, n5, n6) // 10 9 undefined 0

//Desestruturação aninhada:
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
//ignoramos o primeiro elemento, daí o
//segundo elemento é um array e estamos
//ignorando o primeiro elemento dele, 
//depois estamos pegando o segundo 
//elemento desse outro array.
console.log(nota) // 6
//Não usaríamos na prática esse código
//pois é de difícil leitura