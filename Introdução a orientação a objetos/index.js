//Atribuindo produtos privados

class cliente{
    nome; 
    cpf;
}

class contaCorrente{
    agencia;
    //é uma convenção da comunidade se tiver um atributo com "_" fora da classe, não mexa porque ele é privado.
    _saldo = 0;
    //#saldo = 0; https://github.com/tc39/proposal-class-fields.git =>proposta de campos privados não oficializado.
    sacar(valor){
        
        if (this._saldo > valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){        
        if (valor < 0) return;
            this._saldo += valor;
            console.log(`\n Valor depositado com sucesso!`);
        }
}

const cliente1 = new cliente();
const cliente2 = new cliente();

cliente1.nome = "Willians";
cliente1.cpf = 11122233389;
//console.log(cliente1);

onst contaCorrenteWillians = new contaCorrente();
contaCorrenteWillians.agencia = 1001;
console.log(contaCorrenteWillians);

contaCorrenteWillians.depositar(350.50);
console.log(contaCorrenteWillians);

contaCorrenteWillians.sacar(150.50);
console.log(contaCorrenteWillians._saldo);