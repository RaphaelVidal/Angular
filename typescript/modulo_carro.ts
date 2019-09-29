import { Veiculo } from "./modulo_veiculo";

export class Carro extends Veiculo{
    
    private numeroDePortas: number; 

    constructor(pmodelo: string, pnumeroDePortas: number, pvelocidade: number) {
        super()
        this.modelo = pmodelo
        this.numeroDePortas = pnumeroDePortas
        this.velocidade = pvelocidade
    }
   
}