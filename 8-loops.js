
console.log("OperadoresLogicosEncadeados");

const listaDeDestinos = new Array(`Rio de Janeiro`, `São Paulo`, `Bahia`);
console.log(listaDeDestinos);

const idadeComprador = 30;
const estarAcompanhado = true;
const destinoEscolhido = "São Paulo";
let contador = 0;

while (contador < 3) {
    if (destinoEscolhido == listaDeDestinos[contador]) {
        console.log("Cidade disponivel");
    }else{
        console.log("Destino Indisponivel!");
    }
    contador = contador + 1;
}


