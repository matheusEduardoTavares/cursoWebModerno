"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Padrão de import do ECMAScript:
var produto_1 = require("./produto");
//O parâmetro v é do tipo Vendavel, dessa interface
function exibir(v) {
    console.log(v.nome + " custa " + v.preco + "!");
}
var c = new produto_1.Carro;
c.nome = 'Civic';
c.preco = 89499.00;
exibir(c);
//Nativamente o node não executa um arquivo Typescript,
//precisamos fazer um transpile, transpilar de TS para JS.
