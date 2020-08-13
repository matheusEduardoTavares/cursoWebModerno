class Lancamento {
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
    //O constructor é uma função que é  chamada quando a classe é instanciada usando o new. Essa classe será uma função construtora, então os parâmetros de constructor são os parâmetros para instanciar os objetos da classe que na verdade é uma função. 
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    //função receberá 1 ou + argumentos então colocamos três pontos
    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
        
    }

    sumario(){
        //poderíamos usar map e reduct para fazer isso mas veremos só depois
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())

//Então uma forma alternativa para trabalhar com funções construtores é usando classe. Embora pareça que não acrescenta muito já que na verdade é uma função construtora, ela é útil pois quem vem de outras linguagens acaba tendo uma maior familiaridade com o tema, e em alguns momentos é necessário trabalharmos com as classes, por exemplo quando usamos React e precisamos acessar os métodos de ciclo de vida acabamos usando um componente baseado em classe e não em função. Esse é o jeito do JS de usar OO. Na maior parte do tempo usaremos funções construtoras pois é o jeito mais padrão do JS ao invés de usar classes.
