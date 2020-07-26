console.log(`Trabalhando com Listas`);



const listaDeDestinos = new Array(`Rio de Janeiro`, `São Paulo`, `Bahia`);
console.log(listaDeDestinos);
const idadeComprador = 20;

if(idadeComprador >= 18){
    console.log(`Comprador maior de idade`);
    listaDeDestinos.splice(1,1);
}else{
    console.log(`Não pode comprar, você é menor de idade!`);
}

console.log(listaDeDestinos);

//operadores lógicos
console.log(idadeComprador < 18);
console.log(idadeComprador > 18);
console.log(idadeComprador == 18);
console.log(idadeComprador <= 18);
console.log(idadeComprador >= 18);

