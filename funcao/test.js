let frutas = ['banana', 'abacaxi', 'uva', ['azeitona', 'tomate']]

frutas.forEach((fruta, index) => {
    if (Array.isArray(fruta)){
        fruta.forEach((fru, ind) => {
            console.log(index + 1, ind + 1, fru)
        })
    }
    else{
        console.log(index + 1, fruta)
    }
    
})
