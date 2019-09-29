"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa(pnome, pcarroPreferido) {
        this.nome = pnome;
        this.carroPreferido = pcarroPreferido;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (pcarro) {
        this.carro = pcarro;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    return Pessoa;
}()); // fim pessoa
exports.Pessoa = Pessoa;
