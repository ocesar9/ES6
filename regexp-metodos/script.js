const regexp1 = /\w+/gi;
const regexp2 = new RegExp('\\w', 'gi');
const regexp3 = /Java/g;

const frase = 'Javascript e Java Linguagem 101, Java';
console.log(frase);
console.log(frase.replace(regexp1, 'x'));
console.log(frase.replace(regexp2, 'x'));

console.log(regexp2.flags)
console.log(regexp2.global)
console.log(regexp2.ignoreCase)
console.log(regexp2.source)

let i = 1;
while(regexp3.test(frase)){
  console.log(i++, regexp3.lastIndex)
}

const frase2 = 'JavaScript, TypeScript, CoffeeScript, Java, 111-222-333';
const regexp4 = /[A-Za-z]+/g;
const regexp5 = /\d+/g;

let regexResult;
while((regexResult = regexp4.exec(frase2)) !== null){
  console.log(regexResult, regexResult[0])
}

const resultados = frase2.match(regexp4);
console.log(resultados);

const resultados2 = frase2.match(regexp5);
console.log(resultados2);

const regexp6 = /[A-Za-z]+/g;
const resultados3 = frase2.split(regexp6);
console.log(resultados3);

const tags = `
  <ul>
    <li>Item  1</li>
    <li>Item  2</li>
  </ul>
`;

const regexp7 = /(?<=<\/?)\w+/g;
const regexp8 = /<li/g;
const resultados4 = tags.replace(regexp7, 'div');
const resultados5 = tags.replace(regexp8, '$& class="ativa"');
console.log(resultados4);
console.log(resultados5);

const emails = `
  empresa@gmail.com
  contato@gmail.com
  suporte@gmail.com
`;

const regexp9 = /(\w+@)[\w.]+/g;
const reulstados6 = emails.replace(regexp9,'$1hotmail.com')
console.log(reulstados6);

const emails2 = `joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br`

emails2.replace(regexp9, function(...args) {
  console.log(args);
  if(args[2] === '@homail') {
    return `${args[1]}@hotmail`;
  } else if(args[2] === '@ggmail') {
    return `${args[1]}@gmail`;
  } else if(args[2] === '@oulook') {
    return `${args[1]}@outlook`;
  } else {
    return 'x';
  }
});

console.log(emails2);