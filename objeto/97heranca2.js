// Cadeia de protótipos (prototype chain)

const avo = { attr1: 'A' }
//Para colocar qual é o protótipo de um objeto
//basta atribuir ao atributo __proto__ o objeto
//que será seu protótipo
const pai = { __proto__: avo, attr2: 'B', attr3 : '3' }
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attr1) // A, vem de seu avo
console.log(filho.attr0) // undefined
Object.prototype.attr0 = 'Z'
console.log(filho.attr0) // Z, pois o prototype
//do avo é o Object.prototype, portanto achou o
// Z que é o pai do avo
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3) // Z A B C
//O attr3 é pego o do filho pois ele pega o 
//atributo que acha primeiro, no caso, o do 
//filho mesmo, apesar de seu pai também ter
//o mesmo atributo. Chamamos de sombreamento,
//o attr3 que está no filho sombrea o attr3 do
//pai, pois ele já encontrou no filho e não tem
//mais o porque procurar na cadeia de protótipos.

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing, sombreamento, aqui
    //o velMax da ferrari sombrea a velMax do
    //objeto carro
}

const volvo = {
    modelo: 'V40',
    //sombreando a função status
    status(){
        return `${this.modelo}: ${super.status()}`
        // o super chama o pai, o prototype, se
        //usarmos this no lugar do super irá ocorrer
        //recursividade, chamando a mesma função 
        //status que está aqui
    }
}

//outra forma de definir um prototype:
Object.setPrototypeOf(ferrari, carro)
//o primeiro argumento é o objeto que receberá
//o prototype e o segundo argumento é o prototype
//que é passado. Assim carro é pai de ferrari.
//esse é um método especificado da liguagem.

Object.setPrototypeOf(volvo, carro)

/*Quando imprimimos o objeto, é pego somente
os atributos e métodos que estão naquele objeto,
não mostra nada de seus protótipos, mas, sabemos
que se precisarmos usar algum método ou atributo
da cadeia de protótipos podemos usar */
console.log(ferrari) // { modelo: 'F40', velMax: 324 }
console.log(volvo)// { modelo: 'V40', status: [Function: status] }

volvo.acelerarMais(100)
console.log(volvo.status()) //V40: 100Km/h de 200Km/h

ferrari.acelerarMais(300)
console.log(ferrari.status())// 300Km/h de 324Km/h

volvo.acelerarMais(300)
console.log(volvo.status()) //V40: 200Km/h de 200Km/h

/*Não é recomendado ficarmos adicionando atributos
ou métodos direto no Object.prototype como 
fizemos no:
Object.prototype.attr0 = 'Z'
Se precisarmos fazer algo global até podemos
fazer isso mas não é recomendado, e se for 
fazer ter cuidado, pois isso impacta todos
objetos da aplicação.
 */

console.log(pai.__proto__) // { attr1: 'A' }, 
//ou seja, o avô
console.log(pai.__proto__ === Object.prototype) // false
console.log(pai.__proto__ === avo) // true
/*Então definimos um prototype ou dentro do 
objeto alterando o atributo __proto__ ou usando
o método setPrototypeOf de Object. Ambas formas
são oficiais. 
Veremos mais a frente que dá para fazer um forin
que irá percorrer os atributos de um objeto, de
forma que será lido os atributos tanto do objeto
quanto do pai, mas tem como testarmos se um 
atributo pertence ao objeto mesmo ou ao pai, mas
veremos isso depois.*/
