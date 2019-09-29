import { daoInterface } from "./DaoInterface";
import {Pessoa } from "./modulo_pessoa";

export class PessoaDao implements daoInterface {
    nomeTabela: string = "tb_pessoa"

    inserir(object: Pessoa): boolean {
       console.log("logica de insert"); 
        return true
    }
    atualizar(object: Pessoa): boolean {
       console.log("logica de update"); 
        return true
    }
    remover(id: number): any {
        console.log("logica de delete");
        return true
    }
    selecionar(id: number): Pessoa {
        console.log("logica de select");
        return new Pessoa('','')
    }
    selecionarTodos(): [Pessoa] {
       console.log("logica de select all"); 
        return [new Pessoa('','')]
    }

}