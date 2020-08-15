const teste = require('../../moduloa')
//mesmo colocando o moduloa tudo em minúsculo sendo que o arquivo se chamda moduloA.js, ou seja, com A maiúsculo e funcionou mesmo assim. No MAC e no WINDOWS assim funciona, mas no LINUX isso não funciona pois o LINUX é case sensitive e a maioria dos servidores é LINUX, portanto o ideal é colocarmos o nome certo, que seria moduloA, assim:
const moduloA = require('../../moduloA')
console.log(moduloA.ola)// Fala Pessoal

//Podemos acessar o caminho absoluto também. Basta darmos botão direito no moduloA.js que é quem queremos o caminho absoluto e clicar em copy path. Aí poderíamos colocar esse caminho absoluto no require:

const moduloA2 = require('D:/faculdade/arcfaculdade/PROGRAMACAO/curso_web_moderno_udemy/clonado-github/web-moderno/curso/node/moduloA.js')
console.log(moduloA2)

//Mas não é interessante usarmos caminho absoluto principalmente quando formos implantar em outras máquinas. 

//Resumindo até agora: A melhor forma é com caminhos relativos; e sempre colocar o nome do arquivo que formos importar igualzinho o nome do arquivo original, respeitando também o case sensitive. O ideal é para sistemas back end colocar a primeira letra minúscula e usar CamelCase. Podemos seguir outra forma, mas o ideal é que um padrão seja seguido para deixar o sistema + coerente.

//Se tentarmos importar um módulo que não existe, será gerado um erro, fizendo que não pode encontrar tal módulo que foi procurado, ou o caminho está errado, ou o módulo nem existe, ou foi digitado errado o nome do módulo. 

//Assim acessamos módulos internos dentro da nossa aplicação. Podemos também acessar os módulos instalados dentro da pasta node_modules. Tudo que está dentro de node_modules é algo que baixamos, instalamos usando o npm i (ou npm install), depois veremos como é o descritor de um projeto node, que é o package.json e como podemos ter esse arquivo descritor para nos ajudar a instalar as bibliotecas de 1 projeto (dentro dele há todas bibliotecas com as suas versões específicas para que com apenas um comando possamos baixar tudo e remontar a parte do node_modules), por isso não precisamos nos preocupar em subir a pasta node_modules no github, pois além dela ser grande é fácil de remontar ela a partir do comando npm.

//Isso não deve ser feito pois não é uma boa prática pois tudo que há dentro de node_modules deve ser gerado automaticamente a partir do npm, mas podemos por exemplo criar outra pasta dentro da pasta node_modules, chamado por exemplo saudacao. Por padrão, sempre é buscado na pasta um arquivo chamado index.js, então podemos criá-lo dentro da pasta saudacao. Dentro desse arquivo index.js podemos exportar algo que queremos que fique disponível quando alguém importe o módulo.
//Aí para acessar esse módulo basta usarmos:
const saudacao = require('saudacao')
console.log(saudacao) // { ola: 'Bom dia Pessoal!' }

//Sem colocar o caminho relativo deu certo pois tratamos esse arquivo como um módulo baixado de terceiros já que está na pasta node_modules. Mas se não houver o arquivo index.js dentro da pasta saudacao e deixarmos assim dará um erro dizendo que não encontrou o módulo saudacao, pois ele procura esse arquivo index.js.

//Outra coisa que podemos importar a partir do require a partir dos módulos da nossa própria aplicação usando o caminho relativo / absoluto são os módulos que estão dentro do node_modules ou os módulos que já vem previamente instalados com o node, que são os módulos cor. Um exemplo é o módulo http que é interno do node e assim não precisa de caminho relativo:

const http = require('http')
http.createServer((req, resp) => {
    resp.write('Bom Dia!')
    resp.end()
}).listen(8080);

//Outra possibilidade é por exemplo, criamos uma pasta chamada pastaC dentro da pastaB e dentro dessa pastaC criamos um arquivo chamado index.js, aí podemos importar esse módulo dessa forma: 

const c = require('./pastaC/index') // aqui importamos o arquivo em si
console.log(c.ola2) // Legal

//Mas podemos também importar só a pasta que ele irá procurar pelo index.js dentro da pasta:
const c2 = require('./pastaC')
console.log(c2.ola2) // Legal

//Inclusive o arquivo index.js pode ser uma forma única de acessarmos vários imports de outros arquivos. Dentro do arquivo index podemos então referenciar outros arquivos e retornar um objeto que seria a junção de todos os arquivos de 1 determinada pasta que criamos no nosso sistema. Podemos então ou usar o padrão de index nas pastas dentro do projeto, assim importamos o nome da pasta sem precisar dizer o nome do arquivo, ou importamos o arquivo direto como fizemos na importação do moduloA. É esse padrão de importar direto o index.js que acontece dentro do node_modules. 