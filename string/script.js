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

// Exercicio

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Taxa Cliente',
    valor: 'R$ 49',
  },
];

let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach(item =>{
  const numeroLimpo = +item.valor.replace("R$", "");
  console.log(item.descricao.slice(0,4) === "Taxa");
  if(item.descricao.slice(0,4) === "Taxa"){
    taxaTotal += taxaTotal + numeroLimpo;
  }else if(item.descricao.slice(0,11) === "Recebimento"){
    recebimentoTotal += recebimentoTotal + numeroLimpo
  }
})

console.log(taxaTotal);
console.log(recebimentoTotal);



const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const arrayTransportes = transportes.split(';');
console.log(arrayTransportes);


let html = 
`<ul>
    <li><span>Sobre</span></li>
    <li><span>Produtos</span></li>
    <li><span>Contato</span></li>
</ul>`;

html = html.split("span").join("a");
console.log(html);

const frase4 = 'Melhor do ano!';

console.log(frase4.slice(-1));

const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let taxasTotal = 0;
transacoes2.forEach(item =>{
  item = item.toLowerCase();
  item = item.trim();
  item = item.slice(0,4);

  if(item === "taxa"){
    taxasTotal++;
  }
})
console.log(taxasTotal);

