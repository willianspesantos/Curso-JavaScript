import {cliente} from "./Cliente.js"
import {contaCorrente} from "./ContaCorrente.js"

const cliente1 = new cliente();
const cliente2 = new cliente();

cliente1.nome = "Willians";
cliente1.cpf = 11122233389;

const contaCorrenteWillians = new contaCorrente();
contaCorrenteWillians.agencia = 1001;
console.log(contaCorrenteWillians);

contaCorrenteWillians.depositar(350.50);
console.log(contaCorrenteWillians);

contaCorrenteWillians.sacar(150.50);
console.log(contaCorrenteWillians._saldo);