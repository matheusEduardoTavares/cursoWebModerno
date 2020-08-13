/*var funcs = [] // podia ser com const

for (var i = 0; i < 10; i++){
    funcs.push(function nome(){ console.log(i) })
}

funcs[2]()
funcs[8]()*/
var funcs = [] // podia ser com const

for (var i = 0; i < 10; i++){
    funcs.push(function (){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()