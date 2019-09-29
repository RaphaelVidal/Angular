"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modulo_carro_1 = require("./modulo_carro");
var modulo_concessionaria_1 = require("./modulo_concessionaria");
var modulo_pessoa_1 = require("./modulo_pessoa");
// criar carros para o vetor
var carroA = new modulo_carro_1.Carro('Sandero', 5, 10);
var carroB = new modulo_carro_1.Carro('Hilux', 6, 20);
var carroC = new modulo_carro_1.Carro('Fusca', 8, 32);
// criar vetor de carros
var listaDeCarros = [carroA, carroB, carroC]; // ou let listaDeCarros:Carro[] = [carroA,carroB,carroC];
var concessionariaA = new modulo_concessionaria_1.Concessionaria('AV. Brasil', listaDeCarros);
var pessoaA = new modulo_pessoa_1.Pessoa('Emanuella Vidal', 'Fusca');
// console.log(pessoaA.dizerCarroPreferido()); 
console.log(pessoaA);
concessionariaA.mostrarListaDeCarros().map(function (carro_f) {
    // console.log(carro_f['modelo']);
    if (carro_f['modelo'] == pessoaA.dizerCarroPreferido()) {
        pessoaA.comprarCarro(carro_f);
    }
});
console.log(pessoaA.dizerCarroQueTem());
// teste
