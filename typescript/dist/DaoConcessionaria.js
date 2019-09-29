"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modulo_concessionaria_1 = require("./modulo_concessionaria");
var ConcessionariaDao = /** @class */ (function () {
    function ConcessionariaDao() {
        this.nomeTabela = "tb_concessionaria";
    }
    ConcessionariaDao.prototype.inserir = function (object) {
        console.log("logica de insert");
        return true;
    };
    ConcessionariaDao.prototype.atualizar = function (object) {
        console.log("logica de update");
        return true;
    };
    ConcessionariaDao.prototype.remover = function (id) {
        console.log("logica de delete");
        return true;
    };
    ConcessionariaDao.prototype.selecionar = function (id) {
        console.log("logica de select");
        return new modulo_concessionaria_1.Concessionaria('', []);
    };
    ConcessionariaDao.prototype.selecionarTodos = function () {
        console.log("logica de select all");
        return [new modulo_concessionaria_1.Concessionaria('', [])];
    };
    return ConcessionariaDao;
}());
exports.ConcessionariaDao = ConcessionariaDao;
