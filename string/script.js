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

const frase2 = "ta"
console.log(frase2.repeat(5));

let listaItens = "Camisas Bones Calcas Bermudas Vestidos Saias";
console.log(listaItens);
listaItens = listaItens.replace(/[ ]+/g,',');
console.log(listaItens);
listaItens = listaItens.replace("Camisas","Shirts");
console.log(listaItens);


const arrayList = listaItens.split(", ");
console.log(arrayList);

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split("div");

console.log(htmlText);
console.log(htmlArray);

const novoHtml = htmlArray.join("section");
console.log(novoHtml);

const sexo1 = "Feminino";
console.log(sexo1);
console.log(sexo1.toUpperCase());
console.log(sexo1.toLowerCase());

const valor = " R$ 23.00  "
console.log(valor.trim());
console.log(valor.trimStart());
console.log(valor.trimEnd());




const frutasArray = ["Banna", "Melancia", "Laranja"];
