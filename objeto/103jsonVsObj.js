const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c }}
//De objeto para JSON:
console.log(JSON.stringify(obj))
//{"a":1,"b":2,"c":3}
/*O JSON é um formato de dados, não serve para ser algo executado, são dados que estão trafegando de uma aplicação para outra, ou armazenados em um arquivo para arquivos de comunicação. No JSON não é possível usar notação ponto ou manipular os dados, é só um formato textual, o máximo que podemos fazer é executar alguns métodos em seus dados como o toUpperCase; mas a ideia é que para trabalhar com os dados, convertamos o JSON para um objeto.*/

//De JSON para objeto:
// console.log(JSON.parse("{ a: 1, b: 2, c: 3}")) dá erro
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")) dá erro pois todo atributo deve estar em aspas DUPLAS, não simples
console.log(JSON.parse('{ "a": 1.7, "b": 2, "c": 3}')) // agora deu certo

//Agora veremos algumas coisas que o JSON suporta:
console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {}, "e": [] }')) // portanto podemos colocar números, strings (entre aspas duplas), boolean, objetos e arrays dentro de JSON desde que respeitemos suas regras, que é: atributos dentro de aspas duplas e strings dentro de aspas duplas. Se fosse assim daria erro:
//console.log(JSON.parse('{ "a": 1, "b": \'string\', "c": true, "d": {}, "e": [] }'))
//o \' é para mostrar que não é o fechamento do JSON. Isso dá erro porque strings devem estar dentro de aspas duplas.

console.log(JSON.parse('{ "a": 1, "b": "string", "c": true, "d": {"kk": "cc"}, "e": [] }'))

// Podemos testar se os JSON são válidos no site: https://jsonlint.com/
//Muitos banco de dados pegamos os dados através de JSON por exemplo, como o MongoDB, dando até + liberdade para o JSON.