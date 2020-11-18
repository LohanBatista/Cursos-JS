import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

let numeroDeContas = 0;

const cliente1 = new Cliente("lohan", 11122233309);

const cliente2 = new Cliente("Eduarda", 88822233309);

const contaCorrenteLohan = new ContaCorrente(cliente1, 1001);
contaCorrenteLohan.depositar(500);

const contaCorrenteEduarda = new ContaCorrente(cliente2, 1001);
contaCorrenteEduarda.depositar(500);

// let valor = 200;
// // contaCorrenteRicardo.tranferir(valor, contaCorrenteEduarda);

console.log(ContaCorrente.numeroDeContas);
console.log(contaCorrenteLohan);
console.log(contaCorrenteEduarda);
// console.log(contaCorrenteEduarda.saldo);
