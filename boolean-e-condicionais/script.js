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
// !! : valor booleano
var dinheiro = null;

console.log(!!dinheiro);
    
dinheiro = 400;

console.log(!!dinheiro);


console.log(10>5);
console.log(10>10);
console.log(10 >=10);
console.log(10 <=10);

// === | !== : igual e diferente
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
// && : ultimo valor verdadeiro ou primeiro valor falso
if((5-5) && (5+5)){
    console.log('Verdadeiro');
} else {
    console.log('Falso')
}
var condicional = (5-10) && (5+5);

if(condicional){
    console.log('Verdadeiro', condicional);
} else {
    console.log('Falso')
}
// || : procura o verdadeiro
var condicional2 = (5-5) || (5+5) || (10-5)

console.log(condicional2);

var condicional2 = (5-5) || (5+5) && (10-5)

console.log(condicional2);

var corFavorita = 'Azul';

switch(corFavorita){
    case 'Azul' :
        console.log('Olha para ceu!')
        break;
    case 'Vermelho' :
        console.log('Pegue uma maca!')
        break;
    default:
        console.log('Feche os olhos!');
}

// Exercicio

var julio = 23;
var vovo = 63;

if(julio > vovo){
    console.log('E maior')
} else if(julio < vovo){
    console.log('E menor')
} else if( julio === vovo){
    console.log('E igual')
}

var expressao3 = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao3);

var nome2 = 'Julio';
var idade2 = 23;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta =  0;

console.log(!!nome2,!!idade2,!!possuiDoutorado,!!empregoFuturo,!!dinheiroNaConta);

var brasil = 207;
var china = 1340;


console.log(brasil && china);

if(('Gato' === 'gato') && (5 > 2)){
    console.log('Verdadeiro');
}else{
    console.log('Falso');
}

if(('Gato' === 'gato') || (5 > 2)){
    console.log('Gato' && 'Cao');
}else{
    console.log('Falso');
}

