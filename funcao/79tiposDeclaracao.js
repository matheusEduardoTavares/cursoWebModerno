console.log(soma(3, 4))
//console.log(sub(2, 3))
//console.log(mult(2, 3))

// function declaration
function soma(x, y){
    return x + y
}

// function expression
const sub = function (x, y){
    return x - y
}
console.log(sub(2, 3))

// named function expression
const mult = function mult(x, y) { // pode ser qualquer nome não precisa ser mult (mesmo nome da constante)
    return x * y 
}
console.log(mult(2, 3))