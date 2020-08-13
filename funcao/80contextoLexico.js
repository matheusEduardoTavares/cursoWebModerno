const valor = 'Global'

/*Declaramos uma função diretamente no arquivo.
Portanto o contexto léxico que iremos
declarar essa função é dentro do módulo do
node, desse arquivo contextoLexico.js , ou 
seja, não foi dentro de uma função ou objeto */
function minhaFuncao(){
    console.log(valor)
}

/*Agora se fizermos: */
function exec(){
    const valor = 'Local'
    minhaFuncao()
}

exec()
/*Quando chamamos exec ele declara a const
valor e executa a minhaFuncao. Na hora que
esta função é executada, ela procura a 
constante valor para imprimir no console. 
Será impresso Global, por conta do contexto
léxico, o contexto no qual a função 
minhaFuncao foi escrita, então é achado a
const que é global. Isso ocorre porque a 
minhaFuncao foi declarada dentro do módulo do
JS, e ela não tem apenas seu nome e seu
conteúdo interno, os parâmetros; ela também
tem consciência do local que foi definida.
Então a função carrega consigo a informação
do contexto no qual ela foi declarada. Isso
tem tudo haver com o conceito de closure. O
contexto léxico é muito importante para uma
função, pois independente de onde estejamos
chamando a função, ela irá carregar consigo o
contexto em que ela foi escrita e é a partir
disso que chegamos na ideia de closure que
veremos na próxima aula.
Oque ocorre aqui é o seguinte: Ao chamar
a função minhaFuncao() ela procura primeiro
dentro de seu escopo o valor. Como não achou
e ela carrega consigo o escopo do arquivo, ela
irá procurar mais externamente que no caso é o
próprio arquivo e acha o valor contendo
Global, e não no local de execução da função
onde tem o valor com Local, mas sim o local
onde ela foi definida.*/
