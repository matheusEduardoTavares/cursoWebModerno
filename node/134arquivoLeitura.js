//módulo file system, fs:
const fs = require('fs')
//irá primeiro procurar nos módulos nativos do node e o encontrará lá, mas se não o achasse procuraria no node_modules.

// aprenderemos a ler um arquivo de forma síncrona. Se for um arquivo muito pesado, ele irá acabar travando o event loop, pois irá ficar parado de forma síncrona esperando ler o arquivo completamente, e assim não estaremos delegando a questão do IO assíncrono, e estamos colocando diretamente dentro do event loop esse tempo, e ele ficará parado esperando ler completamente para só então dispachar isso para atender a próxima requisição. Então usar uma estratégia síncrona nesse caso não é bom, e não é bom também em casos de acesso a uma requisição remota (ex: mandar uma requisição pro banco de dados), pois tudo isso é IO, tudo isso envolve tempo de resposta consideravel e pode travar o event loop se não for feito da maneira certa.
const caminho = __dirname + '/134arquivo.json'

//sincrono...
const conteudo = fs.readFileSync(caminho, 'utf-8') // arquivo de forma síncrona
console.log(conteudo)
// o segundo parâmetro é o encoding

// assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})
//o terceiro parâmetro é 1 callback que será executada somente depois de ter lido o arquivo inteiro. Essa callback será chamada para fazermos os tratamentos que desejamos em cima do conteúdo do arquivo. O primeiro parâmetro da callback é um erro caso haja, e o segundo o conteúdo que foi lido. Dentro da callback acessamos diretamente mas podíamos fazer caso o err for true é porque deu um erro e tratar isso.

//Mas para o formato JSON há uma forma + simples de o ler, não é preciso usar o fs. Basta fazer:

const config = require('./134arquivo.json') // somos obrigados a passar a extensão, .json , se não ele entende que é um arquivo JS.
console.log(config.db) // só fazendo assim, é retornado um objeto (é convertido automaticamente de JSON para objeto)
//O console.log dentro do fs.readFile é executado depois desse último console.log, pois nesse config é executado de forma síncrona, carrega o objeto e já na linha seguinte o config está com seu valor, já no caso do readFile que é assíncrono, mandamos a callback que só será disparada de volta quando o arquivo está carregado. Por isso o console.log do síncrono executou antes do console.log assíncrono, mesmo estando depois.

//É possível ler uma pasta com o readdir() do fs.
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos) // mostra todos arquivos presentes dentro da pasta, retorna um array com todos os arquivos. A partir disso podemos percorrer o array verificando qualquer informação que desejamos do arquivo como as permissões, tamanho, ler o arquivo, etc.
})
//o __dirname é uma constante presente em todos os módulos, arquivos do node que representa o diretório atual.