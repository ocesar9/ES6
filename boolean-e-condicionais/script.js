var x;
var possuiFaculdade = false;
var possuiDoutorado = true;

if(possuiFaculdade) {
    console.log('Verdadeiro');
    x = 10;
}else {
    console.log('Falso');
    x = 30;
}

console.log(x);

if(possuiFaculdade) {
    console.log('E Verdadeiro!');
}else if(possuiDoutorado) {
    console.log('Possui doutorado!');
}

var nome = '';

if(nome){
    console.log(nome);
} else {
    console.log('Nome nao existe!')
}

var numero = 0;

if(numero){
    console.log(numero);
} else {
    console.log('Numero nao existe!')
}

var string = '10 kg' / 10;
if(string){
    console.log(string);
}else {
    console.log('String nao existe!')
}

if(!possuiFaculdade){
    console.log('Nao possui Faculdade');
}

var dinheiro = null;

console.log(!!dinheiro);
    
dinheiro = 400;

console.log(!!dinheiro);


console.log(10>5);
console.log(10>10);
console.log(10 >=10);
console.log(10 <=10);

var x = 10;
console.log(x == 10);

var x = '10';
console.log(x === 10);

var x = '10';
console.log(x == 10);

var x = 'Gato';
console.log(x === 'gato');

var x = 'Gatos';
console.log(x !== 'Gato');

var x = 11;
console.log(x !== 10);