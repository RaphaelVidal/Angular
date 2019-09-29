import { Carro } from "./modulo_carro";
import { Moto } from "./modulo_moto";


let carroB = new Carro('S10',4,3);

let motoA = new Moto();
motoA.acelerar()
console.log(motoA);
console.log(carroB);