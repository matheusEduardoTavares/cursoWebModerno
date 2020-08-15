const schedule = require('node-schedule')

//Primeira tarefa temporizada:
const tarefa1 = schedule.scheduleJob('*/5 * 21 * * 2', function (){
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})
//A string passada é parecida com o padrão do cron e 
//basicamente de 5 em 5 segundos, em qualquer minuto por
//isso o * sozinho e na hora 21, em qualquer dia, qualquer
//mês e na terça feira (2). Se no lugar de */5 colocássemos
//5 seria executado apenas no segundo 5, quando fosse 5
//segundos, como queremos de 5 em cinco segundos, usamos
// */5 . A função associada ao timer será executada quando
//atingir o tempo que marcamos na string.

//Agora usaremos o temporizador do JS para cancelar o 
//temporizador do node-schedule.
setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)
//O cancel é uma forma de cancelarmos um temporizador do 
//scheduleJob, que o cancelará depois de 20 segundos.

//Temos outra forma de criar uma tarefa, usando o objeto
//que está dentro do node-schedule chamado RecurrenceRule,
//e se instanciarmos ele como objeto para uma variável/
//constante. Dentro dessa regra de recorrência podemos por
//os valores que queremos usar para que ele possa ficar
//de forma recorente executando essa regra.
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 21
regra.second = 30
//o range vai de segunda até sexta, por isso de 1 a 5.
//Ou seja, essa regra só vai ser executada quando for 
//21 horas e qualquer 30 segundos independente dos minutos,
// de segunda a sexta.

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})

// Além do setTimeout e do setInterval do JS temos também
//o setImmediate que executa no momento que é invocado, é
//como o setTimeout colocando 0 milisegundos. Há muitos
//pacotes do node para temporizador mas usamos nessa aula
//o node-schedule. 