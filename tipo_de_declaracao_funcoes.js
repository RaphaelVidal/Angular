// função com nome
function imprimirNome(nome) { return nome }

// função sem nome chamada por variavel
var variavel = function (nome) { return nome }

// arrow function com mais de um parametro e retorno:
var farrow = (nome, sobrenome) => { return nome + sobrenome }

// arrow function com mais de um parametro e sem  palavra return:
var umretorno = (nome, sobrenome) => nome + sobrenome

// arrow function com mais de um parametro e sem  palavra return:
var umparametros = nome => nome + 'vidal'

console.log(imprimirNome('Raphael Vidal'));
console.log(variavel('Raphael Vidal'));
console.log(farrow('Lourdes ', 'Ribeiro'));
console.log(umretorno('Lourdes ', 'Ribeiro'));
console.log(umparametros('Lourdes '));



