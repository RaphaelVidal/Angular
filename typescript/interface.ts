import { ConcessionariaDao } from "./DaoConcessionaria";
import { Concessionaria } from "./modulo_concessionaria";

import { PessoaDao } from "./DaoPessoa";
import { Pessoa } from "./modulo_pessoa";



let daoConcessionaria = new ConcessionariaDao();
let ConcessionariaA = new Concessionaria('', [])


console.log(daoConcessionaria.inserir(ConcessionariaA));

let daopessoa = new PessoaDao();
let pessoaA = new Pessoa('','')

console.log(daopessoa.atualizar(pessoaA));
