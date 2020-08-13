// CÓDIGO NÃO EXECUTÁVEL !!!
/*Colocaremos algumas ideias sobre o paradigma
de OO e iremos discutindo nessa aula, mas o 
código que colocaremos aqui não é executável */


/*Antes da programação procedural, a procedure
 tinhamos a programação baseada em goto, não
 estruturada, rudimentos de estrutura de
 controles, desvio de fluxos a partir do goto.
 Esse é o código não estruturado que foi muito
 criticado pois é ruim para qualidade do
 software. A partir disso começaram a surgir
 linguagens não estruturadas (goto) e linguagens
 estruturadas. O paradigma OO está dentro de 
 linguagem estruturadas. Dentro das linguagens
 estruturadas temos o paradigma procedural, 
 que é baseado no procedimento, na procedure,
 na função. Temos um trecho de código que damos
 um nome a ele e reutilizamos ele em vários 
 lugares. Antes não tínhamos isso, com o goto
 basicamente íamos executando os códigos de
 cima para baixo e pulando de algum trecho 
 para outro através do goto. Agora com as 
 linguagens procedurais temos o foco muito 
 forte na função, procedimento.*/
// Procedural
processamento(valor1, valor2, valor3)
/*Temos por exemplo a função processamento que
tem os parâmetros valores e eles são processados
por essa função. Geralmente temos valores globais
compartilhados no âmbito da nossa aplicação,
normalmente são variáveis, como a parte de 
ponteiros. Vários códigos mexem no mesmo trecho
de dado e isso de certa forma é muito ruim pois
quando compartilhamos um dado que pode variar
dentro do programa e muitos códigos mexem nesse
dado, aumenta muito a chance de ocasionar um
problema pois um método mexe de uma forma que
um outro trecho de código não estava esperando
e isso gera inconsistência, bugs, etc. Mas o 
foco do paradigma funcional tem basicamente um
procedimento que é a função em si, temos os 
parâmetros que são as variáveis que existem no
programa. A ideia é que serão passados valores
para o procedimento por meio da função e o 
procedimento deverá manipular esses valores.
Esses valores podem ser compartilhados de forma
mais global na aplicação, mas basicamente temos
uma função que manipula dados. Isso é essencial
em linguagens procedurais.*/

// OO
/*Na oo mudou o foco. Antes tínhamos foco em
funções que manipulam dados. No OO temos dados
e dentro desses dados temos funções. */
objeto = {
    valor1,
    valor2,
    valor3,
    processamento() {
        // ...
    }
}
/*Basicamente na OO agora temos objetos que é
algo fundamental para ela, é a figura central.
A OO é um tipo de estrutura que gera objetos,
e os objetos são esses propriamente ditos. Em
JS as estruturas que geram objetos podem ser 
classes, funções.
Dentro dos objetos temos valores, atributos 
internos dele, e comportamentos, que são 
funções. 
Nas linguagens procedurais temos processamento
manipulando os dados que podem ser globais
ou internos da função e retornamos um valor.
Na OO temos um objeto que tem valores, e tem
funções, comportamentos dentro dele, e 
passamos a invocar esse processamento a partir
do dado. No caso da função processamento ela
pertence ao objeto e dentro do objeto temos os
valores que são usados dentro do processamento.
O objeto funciona então como uma capsula. A
ideia do OO é estarmos + próximos do mundo real.
Os objetos se relacionam uns com os outros. Cada
objeto tem seus atributos e comportamentos, 
podem se relacionar com outros objetos podem estar
dentro de outros objetos, pode ter uma relação
de parentesco. São princípios que conseguimos
mapear do mundo real, e os abstraímos para 
dentro da OO que sejam interessantes dentro do
nosso sistema. A ideia é mapear o mundo através
de objetos e trazer essa realidade simplificada
para dentro do nosso software.*/
objeto.processamento()
// Foco passou a ser o objeto e antes era a 
//função

/*Princípios importantes:
1 - Abstração: Pegar objetos do mundo real e 
traduzí-lo para dentro do sistema; pegar só 
as características importantes daquele objeto
para o software, pois um único objeto possui N
características e precisaremos somente de algumas
dessas N características para oque nos interessa.
2 - Encapsulamento: Temos os detalhes de 
implementação escondidos e mostrar para quem
precisa usar o sistema uma interface simples 
que permite a interação com o determinado objeto.
Se deixarmos toda a implementação do sistema
exposta, será gerado uma grande dependência entre
esses atributos e métodos. Dessa forma, se 
houver dependência entre os atributos e métodos
o processo de evolução será muito + lento, é
oque dizemos que é um alto nível de acoplamento,
que é algo ruim: Temos muitos objetos que tem
tudo dentro dele exposto, baixo nível de 
encapsulamento, gerando uma dependência muito
maior de todos os objetos, tornando a evolução
do sistema muito + complicada. Claramente que
não há sistemas totalmente sem acoplamento pois
há sim relação entre os objetos só que é + 
importante nos importarmos com a comunicação
dos objetos do que sua implementação interna,
pois a implementação interna mudamos fácil, mas
se os objetos se comunicam de uma forma 
excessiva entre si, ao alterarmos algo interno
em um objeto acaba afetando algum outro que
se relaciona com ele. Portanto a implementação
deve ser encapsulada, escondida do objeto e
termos uma interface de comunicação entre os
objetos.
3 - Herança (prototype): Conseguimos
reutilizar código a partir da composição de
objetos mais simples. Outra forma de reutilizar
código é a herança, recebemos atributos e 
comportamentos de um objeto pai. Algumas 
linguagens tem herança múltipla, mas no JS é
herança simples. A herança em JS é implementada
em cima do prototype, de protótipos. A 
composição é do tipo tem um. Aqui entra os
conceitos de especialização e generalização.
É recomendável priorizarmos composição do que
herança, pois a herança muitas vezes pode trazer
confusões dentro do código, por isso priorizar
a composição é melhor. Nem tudo que é 1 precisamos
mapear como herança, temos padrões de projetos
para fazer isso.
4 - Polimorfismo: Múltiplas formas.
*/
