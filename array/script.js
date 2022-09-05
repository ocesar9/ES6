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

console.log(carroS.pop());
console.log(carroS);

console.log(carroS.shift());
console.log(carroS);

carroS.reverse()
console.log(carroS);


