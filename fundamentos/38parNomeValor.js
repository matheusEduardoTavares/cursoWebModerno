const saudacao = 'Opa' // contexto léxico 1

function exec(){
    const saudacao = 'Falaa' // Definimos outra estrutura par chave valor. Contexto léxico 2
    return saudacao // devido a contextos diferentes n gera conflito
}

// Objetos são grupos aninhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    // contexto do objeto cliente
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
        // contexto do objeto endereco
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)