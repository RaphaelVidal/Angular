"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concessionaria = /** @class */ (function () {
    function Concessionaria(pendereco, plistadeCarros) {
        this.endereco = pendereco;
        this.listadeCarros = plistadeCarros;
    }
    Concessionaria.prototype.fornecedor = function () {
        return this.endereco;
    };
    Concessionaria.prototype.mostrarListaDeCarros = function () {
        return this.listadeCarros;
    };
    Concessionaria.prototype.fornecerHorariosDeFuncionamento = function () {
        return 'de 08:00 as 18:00';
    };
    return Concessionaria;
}());
exports.Concessionaria = Concessionaria;
