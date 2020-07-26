//Programa que verifica se esta disponivel o destino que o cliente escolheu.

console.log("OperadoresLogicosEncadeados \n");

const listaDeDestinos = new Array(`Rio de Janeiro`, `São Paulo`, `Bahia`);
console.log(listaDeDestinos);

const idadeComprador = 30;
const estarAcompanhado = true;
const destinoEscolhido = "São Paulo";
let destinoExiste = false;
let contador = 0;

while (contador < 3) {
    if (destinoEscolhido == listaDeDestinos[contador]) {
        destinoExiste = true;
        break; // força uma saida do laço de repetição
    }
    contador += 1;
}

console.log("\n Destino existe: ", destinoExiste);

