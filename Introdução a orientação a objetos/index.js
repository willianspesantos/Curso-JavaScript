//Entendendo o problema do Cliente.

//A classe é um molde, tudo o que eu quero ter.
//o cliente é o Objeto.
class cliente{
    //tudo dentro da classe é conhecido como atributos
    nome; 
    cpf;
    agencia;
    saldo;
} 

const cliente1 = new cliente();
const cliente2 = new cliente();
// new cliente é uma instacia da minha classe.

cliente1.nome = "Willians";
cliente1.cpf = 11122233389;
cliente1.agencia = 1001;
cliente1.saldo = 0;

cliente2.nome = "Ana";
cliente2.cpf = 88822233389;
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente1);
console.log(cliente2);