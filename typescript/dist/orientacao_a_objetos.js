"use strict";
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
var carroA = new Carro('Sandero', 5, 20);
carroA.acelerar();
// console.log(carroA);
// carroA.parar()
console.log(carroA);
console.log(carroA.velocidadeAtual());
