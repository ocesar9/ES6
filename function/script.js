const perimetro = new Function("lado", "return lado*4")

function somar(n1,n2){
  return n1 + n2 + " 2";
}

console.log(somar(3,3).charAt(2));
console.log(somar.length);
console.log(somar.name);

function darOi(nome,idade){
  console.log("Oi para voce" + nome + idade);
}

darOi();
darOi.call({}," Andre", 28);

window.marca = "Carro";
window.ano = 288;


function descricaoCarro(velocidade){
  console.log(this)
  console.log(window.marca + " " + window.ano + velocidade);
}

descricaoCarro.call({
  marca: "Honda", 
  ano:2015
},100);

const carros = ["Ford", "Fiat", "Honda"]

carros.forEach((item) => {
  console.log(item);
})

const frutas = ["Banana", "Uva", "Pera"]

carros.forEach.call(frutas,(item) => {
  console.log(item);
})

function Dom(selector){
  this.element = document.querySelector(selector)
}

Dom.prototype.ativo = function(classe) {
  console.log(this)
  this.element.classList.add(classe);
}

const ul = new Dom("ul");
ul.ativo("ativar")

const li = {
  element: document.querySelector('li'),
};

Dom.prototype.ativo.call(li,"ativo")

Array.prototype.mostrarThis= function(){
  console.log(this);
}

frutas.mostrarThis();

Array.prototype.pop.call(frutas);

frutas.mostrarThis();

frutas.pop();

frutas.mostrarThis();

const arrayLike = {
  0: "Item 1",
  1: "Item 2",
  2: "Item 3",
  length:3
}

const arrayLi = Array.from(li);

const filtro = arrayLi.filter((item) => {
  return item.classList.contains("ativo");
})

console.log(filtro)
console.log(li)


