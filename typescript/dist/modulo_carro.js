"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro = /** @class */ (function () {
    function Carro(pmodelo, pnumeroDePortas, pvelocidade) {
        this.velocidade = 0;
        this.modelo = pmodelo;
        this.numeroDePortas = pnumeroDePortas;
        this.velocidade = pvelocidade;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
exports.Carro = Carro;
