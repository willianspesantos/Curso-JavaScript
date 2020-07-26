//Programa que verifica se esta disponivel o destino que o cliente escolheu.

console.log("OperadoresLogicosEncadeados \n");

const listaDeDestinos = new Array(`Rio de Janeiro`, `São Paulo`, `Bahia`);
console.log(listaDeDestinos);

const idadeComprador = 30;
const estarAcompanhado = true;
const destinoEscolhido = "Salvador";
let destinoExiste = false;

for (let contador = 0; contador < 3; contador++) {
    if (destinoEscolhido == listaDeDestinos[contador]) {
        destinoExiste = true;
    }
}
console.log("\n Destino existe: ", destinoExiste);

if(destinoExiste == true && idadeComprador > 18){
    console.log("\n Boa viagem!!!");
}else{
    console.log("\n Desculpe, tivemos um erro.");
}


