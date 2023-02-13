const frase = 'Javascript';
const regexp = /J/;
const fraseNova = frase.replace(regexp,'B');

console.log(fraseNova);

const regexp1 = /a/g;
console.log('Javascript'.replace(regexp1,'i'));

const regexp2 = /o/gi;
const regexp3 = /o/g;
console.log('O tempo passou'.replace(regexp2,'i'));
console.log('O tempo passou'.replace(regexp3,'i'));

const regexp4 = /[ta]/gi;
const regexp5 = /ta/gi;
console.log('O tempo voa o tempo passa estamos sempre perdendo tempo'.replace(regexp4,'i'));
console.log('O tempo voa o tempo passa estamos sempre perdendo tempo'.replace(regexp5,'i'));

const regexp6 = /./gi;
const regexp7 = /\./gi;
console.log('O tempo voa o tempo passa estamos sempre perdendo tempo.'.replace(regexp6,'i'));
console.log('O tempo voa o tempo passa estamos sempre perdendo tempo.'.replace(regexp7,'i'));

const regexp8 = /[-.]/g;
console.log('111.222-333-44'.replace(regexp8,'')); 

const regexp9 = /Bra[sz]il/gi;
console.log('Brasil em ingles e Brazil'.match(regexp9))

const regexp10 = /[A-Z]/g;
console.log('Brasil em ingles e Brazil'.match(regexp10))

const regexp11 = /[a-z]/g;
console.log('Brasil em ingles e Brazil'.match(regexp11))

const regexp12 = /[0-9]/g;
console.log('Exemplo de numeros 111.222-333-44'.match(regexp12))

const regexp13 = /[A-Z0-9]/g;
console.log('Exemplo de numeros 111.222-333-44'.match(regexp13));

const regexp14 = /[^ A-z]/g;
console.log('Exemplo de numeros 111.222-333-44'.match(regexp14));



