const instrumentos = ["Guitarra", "Baixo", "Violao"];
const precos = [49, 23, 53, 90, 2];
const dados = [new String('Tipo 1'),["Carro","Portas",{cor:"azul",preco:2000}]]


console.log(instrumentos[2]);
console.log(precos[2]);

console.log(dados[0].toLowerCase());
console.log(dados[1][2].cor);

const carros = new Array("Ford", "Fiat", "Honda");

console.log(carros);

carros[2] = "Ferrari";
console.log(carros);

console.log(carros.length);

const li = document.querySelectorAll("li");
console.log(li);

const arrayLi = Array.from(li);
console.log(arrayLi);

const obj = {
  0: "Andre",
  1: "Rafael",
  2: "Teste",
  length: 3
}

const objArray = Array.from(obj);
console.log(objArray);


console.log(Array.isArray(li));
console.log(Array.isArray(objArray));

console.log(Array.of("Teste", "Teste2"));

console.log(Array(5));

const frutas = ["Banana", "Pera", ["Uva Roxa", "Uva verde"]]

console.log(frutas.length);
console.log(frutas[0].length);

console.log(frutas[2][0].length);

console.log(instrumentos)

instrumentos.sort()
console.log(instrumentos)

const idades = [32,34,45,23,44, 6]
idades.sort()
console.log(idades)

const carroS = ["Ford", "FIat", "VW"]

console.log(carroS);
carroS.unshift("Ferrari", "Kia");
console.log(carroS);
carroS.push("Parati", "Gol")
console.log(carroS);

const novaArray = carroS.push("Parati", "Gol")
console.log(novaArray);

// Primeiro
console.log(carroS.pop());
console.log(carroS);

// Ultimo
console.log(carroS.shift());
console.log(carroS);

carroS.reverse()
console.log(carroS);

// index,remover,item
console.log(carroS.splice(2,0, "Fusca"))

console.log(carroS);

console.log(carroS.splice(2,1))

console.log(carroS);

// alvo, inicio, final
console.log(["Item 1","Item 2", "Item 3", "Item 4", "Item 5"].copyWithin(2,0,2))

console.log(["Item 1","Item 2", "Item 3", "Item 4", "Item 5"].copyWithin(-1))

console.log(["Item 1","Item 2", "Item 3", "Item 4", "Item 5"].fill("Banana",2))

const transporte1 = ["Barco", "Aviao"]
const transporte2 = ["Carro","Moto"]

console.log(transporte1.concat(transporte2));
console.log(transporte1.concat(transporte2, "Caminhao"));

const linguagens = ["HTML", "JS", "php", "css" , "python"]

console.log(linguagens.includes("css"));
console.log(linguagens.indexOf("css"));

let htmlString = "<h2>Titulo Principal</h2>";
htmlString = htmlString.split("h2");
htmlString = htmlString.join('h1')
console.log(htmlString);

console.log(linguagens.slice(2,3))

const cloneLinguagens = linguagens.slice();
console.log(cloneLinguagens)

// Exercicio

  const comidas = ["Pizza","Frango","Carne","Macarrao"]
  
  comidas.push("Coxinnha")
  console.log(comidas);
  
  comidas.unshift("Peixe", "Batata")
  console.log(comidas);

  const primeiroValor = comidas.shift();
  console.log(primeiroValor);
  const ultimoValor = comidas.pop();
  console.log(primeiroValor);


  const estudantes = ["Marcio","Brenda","Joana","Kleber","Julia"]

  console.log(estudantes.sort());
  console.log(estudantes.reverse());
  console.log(estudantes.includes("Juliana"));

  let html = 
  `
    <section>
    <div>Sobre</div>
    <div>Produtos</div>
    <div>Contatos</div>
    </section>
  `

  html = html.split("section").join("ul").split("div").join("li");
  console.log(html);

  
  const carro$ = ["Ford", "Fiat", "Honda"];
  const cloneCarros = carro$.slice();
  carro$.pop()

  console.log(carro$)
  console.log(cloneCarros);


