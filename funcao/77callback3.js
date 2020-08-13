// Exemplo de callback no browser
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu!')
}

//o document aponta para página, para o DOM
/*Atribuímos uma callback que será chamada sempre que o
usuário clicar no body da página. Esse evento é passado
para o argumento e que colocamos e poderíamos
trabalhar com ele dentro do callback, mas não é esse
o foco dessa aula. Poderia ser uma função arrow também 
No caso o evento é o clique do mouse, colocando essa
função no console de qualquer página sempre que clicarmos
na página irá ser printado no console O evento ocorreu!
pois é disparado a função de clicar na página. No 
caso das 2 aulas anteriores, o evento é registrado
quando passamos a função para o forEach e depois para
o filter, e nessa aula a função é registrada quando
damos enter na função criada no console do browser.
Então armazenamos a função em algum lugar e colocamos
para que quando o evento for disparado a função seja
chamada*/
