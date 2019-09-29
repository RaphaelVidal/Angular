import { Carro } from "./modulo_carro";
import {ConcessionariaInterface } from "./concessionariaInteface";

export class Concessionaria implements ConcessionariaInterface{
    
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

    public fornecerHorariosDeFuncionamento():string {
        return 'de 08:00 as 18:00'
    }
}