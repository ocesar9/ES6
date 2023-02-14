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

const regexp35 = /[\w]+/gi;
const regexp36 = /(\w+)@([\w.]+)/gi;
console.log('julio@gmail.com\ncontato@gmail.com'.replace(regexp35, '$&'));
console.log('julio@gmail.com\ncontato@gmail.com'.replace(regexp36, '$1@origamid.com'));
console.log('julio@gmail.com\ncontato@gmail.com'.replace(regexp36, 'contato@$2'));
const regexp37 = /(\w+),\s(\w+)\n?/gi;
console.log('Julio, Cesar\nRafael, Pereira\nDouglas, Braga'.replace(regexp37,'$2 $1 \n'));

const regexp38 = /(?:ta)+/gi;
console.log('Batata, Puta ,Pata'.replace(regexp38, 'X'))

const regexp39 = /\d(?=%)/gi
const regexp40 = /\d(?!%)/gi
console.log('2em, 4px , 5%, 2px, 1px'.replace(regexp39, 'x'))
console.log('2em, 4px , 5%, 2px, 1px'.replace(regexp40, 'x'))

// CEP
const regexp41 = /\d{5}[\s-]?\d{3}/g;
console.log('50980-725\n50720660\n50720 725'.match(regexp41));

// CPF
const regexp42 = /\d{3}[.-]?\d{3}[.-]?\d{3}[.-]?\d{2}/g; 
const regexp43 = /(?:\d{3}[.-]?){3}\d{2}/g; 
console.log('120.083.994-35\n120.083.994.35\n120-083-994-35\n120083994-35\n12008399435'.match(regexp42));
console.log('120.083.994-35\n120.083.994.35\n120-083-994-35\n120083994-35\n12008399435'.match(regexp43));

// CNPJ
const regexp44 = /\d{2}[-.]?(?:\d{3}[-.]?){2}\/?\d{4}?[-.]?\d{2}/g;
console.log('00.000.000/0000-00\n00000000000000\n00-000-000-0000-00\n00.000.000/000000\n00.000.000.000000\n00.000.000.0000.00'.match(regexp44));

// Telefone
const regex45 = /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;
console.log('+55 11 98888-8888\n+55 11 98888 8888\n+55 11 988888888\n+55 11988888888\n+5511988888888\n5511988888888\n11 98888-8888\n11 98888 8888\n(11) 98888 8888\n(11) 98888-8888\n11-98888-8888\n11 98888 8888\n11988888888\n11988888888\n988888888\n(11)988888888\n98888 8888\n8888 8888'.match(regex45))

// Email
const regex46 = /[\w.-]+@[\w-]+\.[\w.-]+/gi;
console.log('email@email.com\nemail@email.com.org\nemail-email@email.com\nemail_email@email.com\nemail.email23@email.com.br\nemail.email23@empresa-sua.com.br\nc@contato.cc'.match(regex46))

// Tags
const regex47 = /(?<=<\/?)[\w]+/gi;
console.log('<div>Isso é uma div</div>\n<div class="ativa">Essa está ativa</div>\n<img src="imagem" />\n<img src="imagem">\n<ul class="ativa">\n<li>Essa está ativa</li>\n</ul>'.match(regex47));


