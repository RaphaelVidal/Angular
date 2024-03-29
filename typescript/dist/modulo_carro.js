"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var modulo_veiculo_1 = require("./modulo_veiculo");
var Carro = /** @class */ (function (_super) {
    __extends(Carro, _super);
    function Carro(pmodelo, pnumeroDePortas, pvelocidade) {
        var _this = _super.call(this) || this;
        _this.modelo = pmodelo;
        _this.numeroDePortas = pnumeroDePortas;
        _this.velocidade = pvelocidade;
        return _this;
    }
    return Carro;
}(modulo_veiculo_1.Veiculo));
exports.Carro = Carro;
