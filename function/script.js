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

// Definindo function
function Dom(selector){
  this.element = document.querySelector(selector)
}

// Atribuindo nova function
Dom.prototype.ativo = function(classe) {
  console.log(this)
  this.element.classList.add(classe);
}

// Declarando function
const ul = new Dom("ul");
ul.ativo("ativar")

// Declarando nova function
const li = {
  element: document.querySelector('li'),
};

// Atribuindo mais uma function
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

const bind = arrayLi.filter.bind((item) => {
  return item.classList.contains("ativo");
})
console.log(filtro)
console.log(bind)
console.log(li)

const numeros = [33,323,432,54,5424,4];

console.log(Math.max.apply(null,numeros))

const $ = document.querySelectorAll.bind(document,"li");
console.log($)

const carro = {
  marca: "Ford",
  ano:2018,
  acelerar:function(aceleracao, tempo){
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  }
}

console.log(carro.acelerar(100,20));


const honda = {
  marca:"Honda",

}

// Atribuindo os parametros pelo bind
const acelerarHonda = carro.acelerar.bind(honda,100);

console.log(acelerarHonda(20));

// Exercicio

  const paragrafos = document.querySelectorAll("p");
  console.log(paragrafos);

  const totalCaracteres = Array.prototype.reduce.call(paragrafos,(acumulador,item) =>{
    console.log(item, item.innerText,item.innerText.length);
    return acumulador + item.innerText.length ;
  },0)

  console.log(totalCaracteres);


  function criarElemento(tag,classe,conteudo){
    const elemento = document.createElement(tag);
    classe ? elemento.classList.add(classe) :null;
    conteudo ? elemento.innerHTML = conteudo :null;
    

    return elemento
  }

  console.log(criarElemento("li", "ativa", "esse e o conteudo"));



  const h1Titulo = criarElemento.bind(null, 'h1', 'titulo');
  
  const cursosJS = h1Titulo("Cursos de javascript")
  const cursosHTML = h1Titulo("Cursos de html")

  console.log(cursosHTML)
  console.log(cursosJS)