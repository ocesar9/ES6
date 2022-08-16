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

// Exercicio

 function People(nome,sobrenome,idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
 } 

 People.prototype.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`
 }

 const julio = new People("Julio", "Guimaraes", 22);

 console.log(julio);
 console.log(julio.nomeCompleto());

 console.log(NodeList.prototype)
 console.log(HTMLAllCollection.prototype)
 console.log(Document.prototype)

 const li = document.querySelector("li");

 console.log(li.constructor.name);
 console.log(li.click.constructor.name);
 console.log(li.innerText.constructor.name);
 console.log(li.value.constructor.name);
 console.log(li.hidden.constructor.name);
 console.log(li.offsetLeft.constructor.name);
 console.log(li.click());

 console.log(typeof(li.hidden.constructor.name));









