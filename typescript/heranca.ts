import { Carro } from "./modulo_carro";
import { Moto } from "./modulo_moto";
import { Concessionaria } from "./modulo_concessionaria";


let carroB = new Carro('S10',4,3);
let motoA = new Moto();

// motoA.acelerar()
// carroB.acelerar()

// console.log(motoA);
// console.log(carroB);

let ConcessionariaA = new Concessionaria('av2',[])

console.log(ConcessionariaA.fornecerHorariosDeFuncionamento());
