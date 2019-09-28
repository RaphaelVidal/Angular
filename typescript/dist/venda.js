"use strict";
var Produto = /** @class */ (function () {
    function Produto(p_idProd, p_descrProd, p_valor) {
        this.idProd = p_idProd;
        this.descrProd = p_descrProd;
        this.valorUnit = p_valor;
    }
    /**
     * alterar informações
     */
    Produto.prototype.alterar = function (n_descr, n_valor) {
        this.descrProd = n_descr;
        this.valorUnit = n_valor;
        return 'produto alterado com sucesso!';
    };
    return Produto;
}());
var produto1 = new Produto(1, 'Arroz', 2.35);
console.log(produto1);
console.log(produto1.alterar('feijão', 3.30));
console.log('Dados alterados: ');
console.log(produto1);
