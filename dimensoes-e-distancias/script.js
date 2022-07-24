const listaAnimais = document.querySelector('.animais-lista');
console.log(listaAnimais);

console.log(listaAnimais.scrollHeight + "px");

const animaisTop = listaAnimais.offsetTop; //Elemento em ralacao ao topo 
console.log(animaisTop + "px"); 

const primeiroH2 = document.querySelector('h2');
console.log(primeiroH2.offsetLeft + "px");


const rect = primeiroH2.getBoundingClientRect(); //Coordenadas do item na pagina 
console.log(rect);


console.log(rect.top);

if(rect.top < 0 ){
  console.log("Passou do item!");
}

console.log(
  "Pagina",
  window.innerWidth,
  window.innerHeight,

  "Pagina e Console",
  window.outerWidth,
  window.outerHeight,

  "Pagina eixo y",
  window.pageYOffset


);

const small = window.matchMedia('(max-width:640px)').matches;

if(small){
  console.log("Mobile")
}else{
  console.log("Desktop")

}
console.log(small);



