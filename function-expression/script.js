
// console.log((somar(4,5)));

// function somar(a,b){
//   return a+b;
// }

// const somar = function(a,b){
//   return a+b;
// }

function dividir(a,b){
  return a/b;
}
    
const somar = (a,b) => a+b;
console.log((somar(4,5)));

const quadrado = a => a*a;
console.log(quadrado(4))

const instrumento = 'violao';

function initCodigo(){
  const instrumento = 'Guitarra';
  console.log(instrumento);
}

//initCodigo();

(function(){
  const instrumento = 'Bateria';
  console.log(instrumento);
})()


console.log(instrumento);

// Exercicios

const priceNumber = n => +n.replace("R$", "").replace(",", ".")
console.log(priceNumber('R$ 99,99'));

(function(){
  var nome = 'Julio';
  console.log(nome);
})()


const active = callback => callback();

// function active(callback) {
//   return callback();
// }

active (function(){
  console.log("teste do Active");
})




