function Carro(marcaAtribuida,precoAtribuido) {
  // this.marca = "Marca"
  // this.preco = 0
  this.marca = marcaAtribuida
  this.preco = precoAtribuido
}
console.log(Carro)

const fiat = new Carro();
fiat.marca = "Fiat";

console.log(fiat)

const honda = new Carro("Honda",3000);
console.log(honda);

const pegeut = new Carro("pegeut",5000);
console.log(pegeut);

function Carro2(marca,precoInical){
  const taxa = 1.2;
  const precoFinal = precoInical * taxa
  this.marca = marca;
  this.preco = precoFinal;
}

const mazda = new Carro2('Mazda',5000);
console.log(mazda);

// function Dom(selector) {
//   this.element = function (){
//     return document.querySelector(selector);
//   },
//   this.ativar = function(classe){
//     this.element().classList.add(classe);
//   }
// }

// const li = new Dom('li:last-child')
// console.log(li.element());
// li.ativar("ativo");
// console.log(li.element());

// const ul = new Dom('ul')
// console.log(ul.element())

// Exercicio

function Pessoa() {
  this.nome = "Nome da pessoa";
  this.idade = 0;
  this.andar = function(){
    console.log(`${this.nome} andou!`);
  }

}

const joao = new Pessoa("Joao",20);
const maria = new Pessoa("Maria",25);
const bruno = new Pessoa("Bruno", 35);

function Dom(seletor){
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;
  this.addClass = function(classe){
    elementList.forEach((element) => {
      element.classList.add(classe);
    })
  }
  this.removeClass = function(classe){
    elementList.forEach((element) => {
      element.classList.remove(classe);
    })
  }

}

const listaItens = new Dom('li');
const ul = new Dom('ul');

// listaItens.addClass('ativo-li')
// ul.addClass('ativo-ul')

listaItens.removeClass('ativo');



