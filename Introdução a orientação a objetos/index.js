//Separando as estruturas de acordo com o problema.

class cliente{
    nome; 
    cpf;
}

class contaCorrente{
    agencia;
    saldo;
    //criando um novo comportamento (função) na classe do sistema.
    sacar(valor){
        //Condição para nao deixar a conta do cliente no negativo.
        if (this.saldo > valor) {
           this.saldo -= valor;
           //this. serve para indicar qual a conta corrente esta solicitando essa operação. 
           console.log(`\n Valor sacado com sucesso, seu saldo é de R$ ${this.saldo}`);
        }else{
           console.log(`\n Valor indisponivel, saldo atual R$ ${this.saldo}`);
       }
    }
}

const cliente1 = new cliente();
const cliente2 = new cliente();

cliente1.nome = "Willians";
cliente1.cpf = 11122233389;
console.log(cliente1);

const contaCorrenteWillians = new contaCorrente();
contaCorrenteWillians.saldo = 0;
contaCorrenteWillians.agencia = 1001;
console.log(contaCorrenteWillians.saldo);
contaCorrenteWillians.saldo = 100;
console.log(contaCorrenteWillians.saldo);
contaCorrenteWillians.sacar(150);