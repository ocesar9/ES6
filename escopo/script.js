'use strict'
var carro = 'Fusca'

function mostrarCarro(){
    console.log(carro);
    var frase = `Meu carro e um ${carro}`;
    console.log(frase);
}

mostrarCarro();
console.log(carro);

if(true){
    var mes = 'dezembro';
    console.log(mes);
}

console.log(mes);

if(true){
    let mes2 = 'dezembro';
    console.log(mes2);
}
// console.log(mes2); ERROR:

{
    var carro3 = 'Fusca';
    const ano = 2018;
}
console.log(carro);
// console.log(ano); ERROR

for(var i =0; i < 10; i++){
    console.log(`Numero ${i}`);
}

console.log(i);

for(let j =0; j < 10; j++){
    console.log(`Numero ${j}`);
}

// console.log(j); ERROR


const semana = 'Sexta';
console.log(semana)
// semana = 'Quinta'; ERROR

const data = {
    ano:2018,
    mes:'dezembro'
}

data.ano = 2019;
console.log(data);
data.dia = 25;
console.log(data);

// Exercicio
{
    var cor = 'preto';
    const marca = 'Fiato';
    let portas = 4;
}

console.log(cor);
// console.log(marca);     ERROR
// console.log(portas);    ERROR

const dois = 2;

function somarDois(x){
    return x + dois;
}

function dividirDois(x){
    return x + dois;
}

console.log(somarDois(4));
console.log(dividirDois(6));

const numero = 50;

for (let numero = 0; numero < 10; numero++){
    console.log(numero)
}

const total = 10 * numero;
console.log(total);