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

// Exercicio

const img = document.querySelector('img');
const imgTop = img.offsetTop;

console.log(imgTop);

function somaImagens(){
  const imagens = document.querySelectorAll("img");
  let soma = 0;

  imagens.forEach((img) => {
    console.log(img.offsetWidth);
    soma += img.offsetWidth
  });

  console.log(soma);
}

somaImagens();

window.onload = function(){ //Janela Carregando
  somaImagens();
}

const links = document.querySelectorAll("a");
console.log(links);

links.forEach((link) =>{
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if(linkWidth >= 48 && linkHeight >= 48){
    console.log(link,"Possui acessibilidade");

  }else{
    console.log(link,"Nao possui acessibilidade");
  }
})

const browserSmall = window.matchMedia('(max-width:720px)').matches;

if(browserSmall){
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
}
