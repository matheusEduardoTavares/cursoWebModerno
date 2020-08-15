console.log(global) // é um objeto que tem muitas coisas dentro dele, coisas interna do node e que podemos eventualemnte usar.

//Veremos um uso dele, mas devemos usar c/ cuidado pois sempre que mexemos em um objeto compartilhado, global, a chance de termos problema é maior. O sistema de módulos do node já serve para resolver esse problema. Mas eventualmente, em cenários de exceções podemo querer colocar por exemplo algum objeto próprio personalizado global.
global.MinhaApp = {
    saudacao(){
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
}
//Esse objeto MinhaApp foi colocado dentro do escopo global. Quando esse arquivo global.js for lido, o MinhaApp vai ser de fato adicionado no global, assim qualquer outro arquivo do sistema terá acesso a MinhaApp.

/*
global.MinhaApp = Object.freeze({
    saudacao(){
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
})
*/