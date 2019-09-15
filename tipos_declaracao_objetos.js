// arrow function
var tpmodelo = function(){console.log(this.marca)}

// criação de objeto com todas definindo as propriedades no mesmo momento
var carro1 = {
    marca: "Renault",
    modelo: tpmodelo,// receber informação pela função anonima tpmodelo
    cor: "Branco",
    qtdLugares: 5,
    valor: 62.650
}
// criação de objeto com todas definindo as propriedades no mesmo momento
var carro2 = new Object()
carro2.marca = "Honda"
carro2.modelo = tpmodelo
carro2.cor = "Azul"
carro2.qtdLugares = 5
carro2.valor = 50.500

// console.log(carro1);
// console.log(carro2);

carro1.modelo();
carro2.modelo();
