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
    return Concessionaria;
}());
exports.Concessionaria = Concessionaria;
