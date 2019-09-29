import { Carro } from "./modulo_carro";
export class Pessoa {
    private nome: string; private carroPreferido: string; private carro!: Carro;
    
    constructor(pnome: string, pcarroPreferido: string) {
        this.nome = pnome;
        this.carroPreferido = pcarroPreferido
    }
    public dizerNome(): string {
        return this.nome
    }

    public dizerCarroPreferido(): string {
        return this.carroPreferido
    }
    public comprarCarro(pcarro: Carro): void {
        this.carro = pcarro
    }
    public dizerCarroQueTem(): Carro {
        return this.carro
    }
}// fim pessoa