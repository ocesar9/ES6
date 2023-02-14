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

const frase2 = 'JavaScript, TypeScript, CoffeeScript, Java';
const regexp4 = /\w+/g;

let regexResult;
while((regexResult = regexp4.exec(frase2)) !== null){
  console.log(regexResult, regexResult[0])
}