"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modulo_pessoa_1 = require("./modulo_pessoa");
var PessoaDao = /** @class */ (function () {
    function PessoaDao() {
        this.nomeTabela = "tb_pessoa";
    }
    PessoaDao.prototype.inserir = function (object) {
        console.log("logica de insert");
        return true;
    };
    PessoaDao.prototype.atualizar = function (object) {
        console.log("logica de update");
        return true;
    };
    PessoaDao.prototype.remover = function (id) {
        console.log("logica de delete");
        return true;
    };
    PessoaDao.prototype.selecionar = function (id) {
        console.log("logica de select");
        return new modulo_pessoa_1.Pessoa('', '');
    };
    PessoaDao.prototype.selecionarTodos = function () {
        console.log("logica de select all");
        return [new modulo_pessoa_1.Pessoa('', '')];
    };
    return PessoaDao;
}());
exports.PessoaDao = PessoaDao;
