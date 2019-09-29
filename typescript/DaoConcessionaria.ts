import { daoInterface } from "./DaoInterface";
import {Concessionaria } from "./modulo_concessionaria";

export class ConcessionariaDao implements daoInterface {
    nomeTabela: string = "tb_concessionaria"

    inserir(object: Concessionaria): boolean {
       console.log("logica de insert"); 
        return true
    }
    atualizar(object: Concessionaria): boolean {
       console.log("logica de update"); 
        return true
    }
    remover(id: number): any {
        console.log("logica de delete");
        return true
    }
    selecionar(id: number): Concessionaria {
        console.log("logica de select");
        return new Concessionaria('',[])
    }
    selecionarTodos(): [Concessionaria] {
       console.log("logica de select all"); 
        return [new Concessionaria('',[])]
    }

}