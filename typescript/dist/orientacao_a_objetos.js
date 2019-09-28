"use strict";
var Carro = /** @class */ (function () {
    function Carro(pmodelo, pnumeroDePortas, pvelocidade) {
        this.velocidade = 0;
        this.modelo = pmodelo;
        this.numeroDePortas = pnumeroDePortas;
        this.velocidade = pvelocidade;
    }
    Carro.prototype.acelerar = function () { this.velocidade = this.velocidade + 10; };
    Carro.prototype.parar = function () { this.velocidade = 0; };
    Carro.prototype.velocidadeAtual = function () { return this.velocidade; };
    return Carro;
}());
var Concessionaria = /** @class */ (function () {
    function Concessionaria(pendereco, plistadeCarros) {
        this.endereco = pendereco;
        this.listadeCarros = plistadeCarros;
    }
    Concessionaria.prototype.fornecedor = function () { return this.endereco; };
    Concessionaria.prototype.mostrarListaDeCarros = function () { return this.listadeCarros; };
    return Concessionaria;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(pnome, pcarroPreferido) {
        this.nome = pnome;
        this.carroPreferido = pcarroPreferido;
    }
    Pessoa.prototype.dizerNome = function () { return this.nome; };
    Pessoa.prototype.dizerCarroPreferido = function () { return this.carroPreferido; };
    Pessoa.prototype.comprarCarro = function (pcarro) { this.carro = pcarro; };
    Pessoa.prototype.dizerCarroQueTem = function () { return this.carro; };
    return Pessoa;
}()); // fim pessoa
// criar carros para o vetor
var carroA = new Carro('Sandero', 5, 10);
var carroB = new Carro('Hilux', 6, 20);
var carroC = new Carro('Fusca', 8, 32);
// criar vetor de carros
var listaDeCarros = [carroA, carroB, carroC]; // ou let listaDeCarros:Carro[] = [carroA,carroB,carroC];
var concessionariaA = new Concessionaria('AV. Brasil', listaDeCarros);
var pessoaA = new Pessoa('Emanuella Vidal', 'Fusca');
console.log(pessoaA.dizerCarroPreferido());
