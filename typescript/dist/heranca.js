"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modulo_carro_1 = require("./modulo_carro");
var modulo_moto_1 = require("./modulo_moto");
var modulo_concessionaria_1 = require("./modulo_concessionaria");
var carroB = new modulo_carro_1.Carro('S10', 4, 3);
var motoA = new modulo_moto_1.Moto();
// motoA.acelerar()
// carroB.acelerar()
// console.log(motoA);
// console.log(carroB);
var ConcessionariaA = new modulo_concessionaria_1.Concessionaria('av2', []);
console.log(ConcessionariaA.fornecerHorariosDeFuncionamento());
