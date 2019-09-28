class Carro {  private modelo: string; private numeroDePortas: number; private velocidade: number = 0;
    constructor(pmodelo: string, pnumeroDePortas: number, pvelocidade: number) {
        this.modelo = pmodelo
        this.numeroDePortas = pnumeroDePortas
        this.velocidade = pvelocidade
    }
    public acelerar(): void { this.velocidade = this.velocidade + 10 }
    public parar(): void { this.velocidade = 0 }
    public velocidadeAtual(): number { return this.velocidade }
}

class Concessionaria { private endereco: string;  private listadeCarros: Array<Carro>;
    constructor(pendereco: string,plistadeCarros:Array<Carro>) { this.endereco = pendereco; this.listadeCarros = plistadeCarros }
    public fornecedor(): string { return this.endereco }
    public mostrarListaDeCarros(): Array<Carro> { return this.listadeCarros }
}

class Pessoa { private nome: string; private carroPreferido: string;   private carro: any;
    constructor(pnome: string, pcarroPreferido: string) { this.nome = pnome; this.carroPreferido = pcarroPreferido }
    public dizerNome(): string { return this.nome }
    public dizerCarroPreferido(): string { return this.carroPreferido }
    public comprarCarro(pcarro: any): void { this.carro = pcarro }
    public dizerCarroQueTem(): string { return this.carro }
}// fim pessoa

// criar carros para o vetor
let carroA = new Carro('Sandero', 5, 10); let carroB = new Carro('Hilux', 6, 20); let carroC = new Carro('Fusca', 8, 32)

// criar vetor de carros
let listaDeCarros: Array<Carro> = [carroA,carroB,carroC]; // ou let listaDeCarros:Carro[] = [carroA,carroB,carroC];

let concessionariaA = new Concessionaria('AV. Brasil', listaDeCarros);

let pessoaA = new Pessoa('Emanuella Vidal','Fusca')
console.log(pessoaA.dizerCarroPreferido()); 


