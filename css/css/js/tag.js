const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag) {
        return this[tag] ? this[tag] : this.padrao
    }
}

/*
p: '#388e3c',
div: '#1565c0',
span: '#e53935',
section: '#f67809',
ul: '#5e35b1',
ol: '#fbc02d',
header: '#d81b60',
nav: '#64dd17',
main: '#00acc1',
footer: '#304ffe',
form: '#9f6581',
body: '#25b6da',
padrao: '#616161'
*/

document.querySelectorAll('.tag').forEach(box => {
    const tagName = box.tagName.toLowerCase()

    box.style.borderColor = colors.get(tagName)

    // Box é o elemento, dentro dele temos uma lista de 
    //classes que podemos aplicar nos elementos. Se dentro
    //do elemento html estiver a classe nolabel, ele não
    //entrará no if.
    if (!box.classList.contains('nolabel')) {
        // cramos uma tag label
        const label = document.createElement('label')
        //e a injetamos dentro de todos os elementos que tem
        //a classe tag. 
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        box.insertBefore(label, box.childNodes[0])
        //aí inserimos essa label antes do elemento html
        //que é representado pela box, sendo qualquer tag
        //que tenha a classe tag. O childNodes[0] é o 
        //primeiro elemento filho que esteja presente dentro
        //da tag
    }
})