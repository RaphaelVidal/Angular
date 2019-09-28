class Produto {
    private idProd: number
    private descrProd: string
    private valorUnit: number

    constructor(p_idProd: number, p_descrProd: string, p_valor: number){
        this.idProd = p_idProd
        this.descrProd = p_descrProd
        this.valorUnit = p_valor
    }

    /**
     * alterar informações
     */
    public alterar(n_descr: string, n_valor: number): string {
        this.descrProd = n_descr
        this.valorUnit = n_valor
        return 'produto alterado com sucesso!'
    }
}

let produto1 = new Produto(1, 'Arroz', 2.35);
console.log(produto1);
console.log(produto1.alterar('feijão',3.30));
console.log('Dados alterados: ');
console.log(produto1);