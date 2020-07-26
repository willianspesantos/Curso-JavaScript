//Programa de compra de viagens

console.log("OperadoresLogicosEncadeados");

const listaDeDestinos = new Array(`Rio de Janeiro`, `São Paulo`, `Bahia`);
console.log(listaDeDestinos);

const idadeComprador = 30;
const estarAcompanhado = true;

//verifica se o cliente esta apto a comprar a passagem, sendo maior de idade ou se esta acompanhado por um responsavel.
if(idadeComprador >= 18 || estarAcompanhado == true){
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1,1);
}else{
    console.log("Não pode comprar, você é menor de idade!");
}
console.log(listaDeDestinos);

console.log("\n\n");
console.log("Embarque: ");

if (idadeComprador >= 18) {
    console.log("Boa viagem!!!");    
} else {
   console.log("Menor de idade não pode embarcar!");
}


