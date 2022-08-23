const comida = "Pizza";
const agua = new String("Agua ");

console.log(agua.length);

const frase = "A melhor comida";
const linguagem = "Javascript";

console.log(frase[frase.length - 1]);

console.log(frase.charAt(frase.length - 1));

const fraseFinal = frase.concat(linguagem, "!!");
console.log(fraseFinal);

const fruta = "Banana";
const listaFrutas = 'Melancia,Banana,Laranja'

console.log(listaFrutas.includes(fruta,"Limao"));

console.log(fruta.startsWith("Ba"))
console.log(fruta.endsWith("na"))

const transacao1 = "Deposito de cliente";
const transacao2 = "Deposito de fornecedor";
const transacao3 = "Taxa de camisa";

console.log(transacao3.slice(0,-2));
console.log(transacao3.slice(-6));

console.log(fruta.indexOf("n"));
console.log(fruta.lastIndexOf("n"));

const listaPrecos = ["R$ 99","R$ 199","R$ 120000"]

listaPrecos.forEach((preco) =>{
  
  console.log(preco.padStart(20, '.'));
})


