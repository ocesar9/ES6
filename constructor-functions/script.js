function Pessoa(nome, idade){
  this.nome = nome;
  this.idade = idade;
  this.abracar = function(){
    return `${this.nome} abracou`
  }
  this.andar = function(){
    return `${this.nome} andou pelo objeto`
  }
}

Pessoa.prototype.andar = function(){
  return `${this.nome} andou`
}

Pessoa.prototype.nadar = function(){
  return `${this.nome} nadou`
}

const andre = new Pessoa("Andre",28)

console.log(Pessoa.prototype)
console.log(andre.prototype)

console.log(andre.andar())
console.log(andre.nadar())
console.log(andre.abracar())

const pais = "Brasil"

const cidade = new String("Rio")
console.log(cidade)

console.log(pais.charAt(0))
console.log(cidade.charAt(0))

const listaAnimais = ["cachorro", "gato", "cavalo"]

const lista = document.querySelectorAll("li");
console.log(lista)
// Transforma numa array 
const listaArray1 = Array.prototype.slice.call(lista)
console.log(listaArray1);
const listaArray2 = Array.from(lista);
console.log(listaArray2);

const Carro = {
  marca: "Ford",
  preco: 2000,
  andar(){
    return true;
  }
}

console.log(Carro.preco.constructor.name)
console.log(Carro.marca.constructor.name)
console.log(Carro.andar.constructor.name)



