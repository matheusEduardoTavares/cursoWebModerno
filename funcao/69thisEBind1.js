const pessoa = {
    saudacao: 'Bom dia!',
    //podemos criar funções dessa forma também:
    //veremos depois, mesmo o objeto sendo 
    //um par chave valor podemos declarar 
    //funções dentro dele assim:
    falar(){
        console.log(this.saudacao)
        //Estamos acessando o saudacao do
        //objeto do qual é o dono da função, que
        //é o objeto pessoa. Isso é + voltado
        //p/ OO.
    }
}

pessoa.falar()
//se executarmos o pessoa.falar() sem o this
//irá dar erro dizendo que saudacao não está
//definido 

//agora vamos armazenar essa função falar em 
//uma variável:
const falar = pessoa.falar
falar() // irá dar undefined pois o this.saudacao
//está apontando para um objeto diferente que não
//é mais o objeto pessoa. Este é um conflito
//entre os paradigmas funcional e OO, já que 
//o fato de armazenarmos uma função dentro de
//uma variável, nesse contexto chamando direto
//que é o falar() não estamos chamando a função
//falar a partir do contexto pessoa. A constante
//falar no node está em outro contexto, 
//ocasionando esse conflito de paradigmas.
//Nesse caso podemos usar o bind:
// const falarDePessoa = pessoa.falar
//associado a função falar, existe uma função
//que tem outras funções por padrão, e uma 
//dessas outras funções é o bind.
const falarDePessoa = pessoa.falar.bind(pessoa)
//o bind passamos um objeto ao qual queremos
//que seja resolvido o this. No caso o this 
//dentro da função falar é a constante pessoa 
//então passamos pessoa como argumento para bind
//oque significa que sempre a partir dessa função
//o bind será resolvido para pessoa.
falarDePessoa()
/*Nesse caso o bind é quem amarra o objeto para
ele ser o dono da execução daquele método sempre
que esse método for chamado. Ou seja, quando
chamarmos essa função, sempre que referenciarmos
o this ele será o objeto que passarmos como
argumento para função bind. A constante falar não
foi alterada usando o bind no no falarDePessoa
pois a função bind retorna uma outra função, e
nessa função fica amarrada para pessoa como fizemos
no falarDePessoa, mas isso não altera qualquer
outra instância da função. Tanto que se fizermos
isso, continuará dando undefined:*/
const falar2 = pessoa.falar
falar2()
//Com isso resolvemos esse problema do this.