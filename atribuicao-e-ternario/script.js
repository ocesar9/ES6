var numero = 20;
var numero2 = 10;

numero +=10;// numero = numero +10;
console.log(numero);

numero2 /=10;
console.log(numero2);

var idade = 20;
var naoPossuiDiabetes = false;

var podeBeber;
podeBeber = idade >= 18? true : false;
console.log(podeBeber);

podeBeber = idade >= 18 && naoPossuiDiabetes? true : false;
console.log(podeBeber);

podeBeber = idade >= 18 && naoPossuiDiabetes? 25 : 10;
console.log(podeBeber);

podeBeber = idade >= 18 && naoPossuiDiabetes? "Pode beber" : "Nao pode beber";
console.log(podeBeber);

podeBeber = idade >= 18 && naoPossuiDiabetes;
console.log(podeBeber);


var possuiFaculdade = false;
if(possuiFaculdade)
    console.log('Sim possui');
else
    console.log('Nao possui')


// Exercicio

var scroll = 1000;

scroll += 500;
console.log(scroll);

var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = possuiCarro && possuiCasa;
console.log(darCredito);