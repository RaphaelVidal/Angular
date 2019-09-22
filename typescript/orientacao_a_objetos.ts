class Carro {
    private modelo: string
    private numeroDePortas: number
    private velocidade: number = 0

    constructor(pmodelo: string, pnumeroDePortas: number, pvelocidade: number) {
        this.modelo = pmodelo
        this.numeroDePortas = pnumeroDePortas
        this.velocidade = pvelocidade
    }

    public acelerar(): void {
        this.velocidade = this.velocidade + 10

    }
    public parar(): void {
        this.velocidade = 0
    }
    public velocidadeAtual(): number {
        return this.velocidade
    }

}

let carroA = new Carro('Sandero',5,20)
carroA.acelerar()
// console.log(carroA);
// carroA.parar()
console.log(carroA);

console.log(carroA.velocidadeAtual());