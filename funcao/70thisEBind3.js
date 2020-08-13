//Outra forma de resolver esse problema:

function Pessoa(){
    this.idade = 0

//Basta criarmos uma constante que geralmente
//é chamada de self mas pode ter qualquer nome:
    const self = this // aqui o this é o objeto que queremos apontar, a instância atual que está recebendo o código. É uma constane então não muda nunca
    setInterval(function() {
        //substituímos agora o this pelo self
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new Pessoa
/*É uma técnica bem usada mas não é muito 
recomendado pois estamos alterando o comportamento
esperado da linguagem. Acontece que o self irá
sempre apontar para pessoa pois na criação da
função ele já recebe o this, então não importa
onde chamemos essa função o self sempre apontará
para o this inicialmente, ou seja, para Pessoa.
 */