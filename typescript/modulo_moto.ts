import { Veiculo } from "./modulo_veiculo";

export class Moto extends Veiculo{
    public acelerar():void{
        this.velocidade = this.velocidade + 20
    }
}