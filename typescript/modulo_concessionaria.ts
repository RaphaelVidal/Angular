import { Carro } from "./modulo_carro";

export class Concessionaria {
    
    private endereco: string; private listadeCarros: Array<Carro>;

    constructor(pendereco: string, plistadeCarros: Array<Carro>) {
        this.endereco = pendereco; this.listadeCarros = plistadeCarros
    }
    public fornecedor(): string {
        return this.endereco
    }
    public mostrarListaDeCarros(): Array<Carro> {
        return this.listadeCarros
    }
}