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

const regexp15 = /\w/g;
const regexp16 = /\W/g;
console.log('Exemplo de numeros 111.222-333-44'.match(regexp15));
console.log('Exemplo de numeros 111.222-333-44'.match(regexp16));
const regexp17 = /\d/g;
const regexp18 = /\D/g;
console.log('Exemplo de numeros 111.222-333-44'.match(regexp17));
console.log('Exemplo de numeros 111.222-333-44'.match(regexp18));

const regexp19 = /\s/g;
const regexp20 = /\S/g;
const regexp21 = /[\S\s]/g;
console.log('Exemplo de numeros 111.222-333-44'.match(regexp19));
console.log('Exemplo de numeros 111.222-333-44'.match(regexp20));
console.log('Exemplo de numeros 111.222-333-44'.match(regexp21));

const regexp22 = /i{4}/g;
const regexp23 = /i{1,4}/g;
console.log('Vaiiii'.match(regexp22));
console.log('Vaiiiiiii agiirr'.match(regexp23));

const regexp24 = /\w{1,5}/g;
console.log('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quae, quas nam, nostrum nihil dolores repellendus et ullam incidunt asperiores, mollitia corrupti reiciendis recusandae assumenda alias fugit porro enim deserunt!'.match(regexp24));


const regexp25 = /ai*/g;
console.log('Vaiiii agirrr'.match(regexp25));

const regexp26 = /-\d*/g;
console.log('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quae, quas nam, nostrum nihil dolores repellendus et ullam incidunt asperiores, mollitia corrupti reiciendis recusandae assumenda alias fugit porro enim deserunt! 111.222-333-44'.match(regexp26));

const regexp27 = /regexp?/gi;
console.log('Regex e Regexp'.match(regexp27))

const regexp28 = /Lorem|recusandae|\d/gi;
console.log('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quae, quas nam, nostrum nihil dolores repellendus et ullam incidunt asperiores, mollitia corrupti reiciendis recusandae assumenda alias fugit porro enim deserunt! 111.222-333-44, Lorem ipsum dolor sit amet!'.match(regexp28));

const regexp29 = /\bLorem\b/gi;
console.log('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quae, quas nam, nostrum nihil dolores repellendus et ullam incidunt asperiores, mollitia corrupti reiciendis recusandae assumenda alias fugit porro enim deserunt! 111.222-333-44, lorem ipsum dolor sit amet!'.replace(regexp29, 'X'));

const regexp30 = /\B\d+\B/gi;
console.log('11_22 33-44 55e66 77e88'.replace(regexp30,'X'));

const regexp31 = /^\w+/g;
const regexp32 = /\w+$/g;
console.log('julio@gmail.com\ncontato@gmail.com'.replace(regexp31, 'X'));
console.log('julio@gmail.com\ncontato@gmail.com'.replace(regexp32, 'X'));

const regexp33 = /\n/gm;
console.log('julio@gmail.com\ncontato@gmail.com'.replace(regexp33, 'X'));

const regexp34 = /\u0040/gm;
console.log('julio@gmail.com\ncontato@gmail.com'.replace(regexp34, 'X'));









