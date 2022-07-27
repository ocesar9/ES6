// const img = document.querySelector('img');
// console.log(img);

// function callback(){
//   console.log('clicou 2');
// }

// function callback2(event){
//   console.log(event);
// };

// img.addEventListener('click', function(){
//   console.log('clicou 1');
// });

// img.addEventListener('click', callback);

// img.addEventListener('click', callback2);

// const animaisLista = document.querySelector('.animais-lista');
// animaisLista.addEventListener('click', callbackLista);

// function callbackLista(e){
//   console.log(e.currentTarget);
//   console.log(e.target);
//   console.log(e.type);
// }

const linkExterno = document.querySelector("a[href^='http'");
function handleLinkExterno(event){
  event.preventDefault();
  console.log(event);
  console.log(this)
  console.log(event.currentTarget)

  console.log(this.getAttribute('href'))
}

linkExterno.addEventListener('click', handleLinkExterno);

const h1 = document.querySelector("h1");

function handleEvent(event){
  console.log(event.type, event)
}

h1.addEventListener('click',handleEvent);
h1.addEventListener('mouseenter',handleEvent);

window.addEventListener('scroll', handleEvent);
window.addEventListener('resize', handleEvent);
window.addEventListener('keydown', handleEvent);


function handleKeyboard(event){
  console.log(event.key);
  if(event.key === "f"){
    document.body.classList.toggle("fullscreen");
  }
}

window.addEventListener('keydown', handleKeyboard);

function handleImg(e){
  console.log(e.currentTarget.getAttribute("src"));

}

const imgs = document.querySelectorAll("img");
imgs.forEach((img) =>{
  console.log(img);
  img.addEventListener('click', handleImg);
})

// Exercicio

const linksInternos = document.querySelectorAll("a[href^='#']");

function handleLink(e){
  e.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove("ativo");
  })
  this.currentTarget.classList.add("ativo");

}

linksInternos.forEach((link) => {
  link.addEventListener('click', handleLink);
})

const todosElementos = document.querySelectorAll("body *");

function handleElemento(e){
  console.log(e.currentTarget);
  // e.currentTarget.remove();
}

todosElementos.forEach((elemento) => {
  elemento.addEventListener('click', handleElemento);
})

console.log(todosElementos);

function handleClickT(e){
  console.log(e.key);
  if(e.key === "t"){
    console.log("Cliquei no 't'");
    document.documentElement.classList.toggle("textomaior");

  }
}

window.addEventListener('keydown', handleClickT);


