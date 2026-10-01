import { mensagem } from "./mensagem.js";
console.log(mensagem());

import { mensagem2 } from "./mensagem2.js";
console.log(mensagem2());

import { calculo } from "./calculo.js";
const resultados = calculo();
console.log(resultados.soma),
console.log(resultados.subtracao),
console.log(resultados.multiplicacao),
console.log(resultados.divisao);