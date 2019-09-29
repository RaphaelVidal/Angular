import {Carro} from "./modulo_carro";
import { Concessionaria} from "./modulo_concessionaria";
import { Pessoa } from "./modulo_pessoa";

// criar carros para o vetor
let carroA = new Carro('Sandero', 5, 10); let carroB = new Carro('Hilux', 6, 20); let carroC = new Carro('Fusca', 8, 32)

// criar vetor de carros
let listaDeCarros: Array<Carro> = [carroA,carroB,carroC]; // ou let listaDeCarros:Carro[] = [carroA,carroB,carroC];

let concessionariaA = new Concessionaria('AV. Brasil', listaDeCarros);

let pessoaA = new Pessoa('Emanuella Vidal','Fusca')
// console.log(pessoaA.dizerCarroPreferido()); 
console.log(pessoaA);
concessionariaA.mostrarListaDeCarros().map((carro_f:Carro)=>{
// console.log(carro_f['modelo']);
if (carro_f['modelo'] == pessoaA.dizerCarroPreferido()) {
    pessoaA.comprarCarro(carro_f)
}
})

console.log(pessoaA.dizerCarroQueTem());
// teste