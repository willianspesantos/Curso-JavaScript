console.log(`Trabalhando com Listas`);

//const rioDeJaneiro = `Rio de Janeiro`;
//const saoPaulo = `São Paulo`;
//const bahia = `Bahia`;

//console.log(`Cidades disponiveis para viagem:`);
//console.log(`${rioDeJaneiro} ${saoPaulo} ${bahia}`);

const listaDeDestinos = new Array(`Rio de Janeiro`, `São Paulo`, `Bahia`);
console.log(listaDeDestinos);
listaDeDestinos.push(`Curitiba`); // O push irá adicionar outro elemento no Array.
console.log(listaDeDestinos);

listaDeDestinos.splice(2,1); // o splice irá remover um elemento da Array, dentro do parenteses primeiro você coloca a posição e depois a quantidade de elementos que irá remover.
console.log(listaDeDestinos);

console.log(listaDeDestinos[0], listaDeDestinos[2]); // para chamar um elemento especifico, coloca o nome da variavel e entre colchetes a poisição que ele se encontra.