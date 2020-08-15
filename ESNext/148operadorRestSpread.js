/*
O operador é o ... e seu nome (rest/spread)
diz respeito a como o utilizamos. Se ele
pegar algo e espalhar é spread, se vai
pegar algo e juntar é rest. Já vimos 
rest na aula passada e agora veremos Spread
*/

//operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

//usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario}
/*O spread serve para pegarmos todos os 
atributos de um outro objeto, no caso, 
funcionario e espalhar ele dentro de um
outro objeto, no caso clone. O objeto 
chamado clone não aponta para o mesmo 
endereço de memória de funcionário, o spread
faz como uma clonagem dos atributos de um
objeto para outro, portanto o objeto clone
não gera nenhum impacto no objeto funcionario*/
console.log(clone)
// { ativo: true, nome: 'Maria', salario: 12348.99 }

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafaela', ...grupoA]
//estamos espalhando todos elementos, itens
//do array grupoA dentro dessa posição do
//array grupoFinal
console.log(grupoFinal)
//[ 'Maria', 'Rafaela', 'João', 'Pedro', 'Gloria' ]
const grupoFinal2 = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal2)
//[ 'Maria', 'João', 'Pedro', 'Gloria', 'Rafaela' ]