// const h1 = document.querySelector('h1');
// const animaisDescricao = document.querySelector(".animais-descricao");
// console.log(animaisDescricao.innerHTML)

// console.log(animaisDescricao.innerText)

// h1.innerHTML = '<p>Novo Titulo</p>';
// // h1.innerText = "Novo Texto";

// console.log(animaisDescricao.parentElement)
// console.log(animaisDescricao.parentElement.parentElement)

// console.log(h1.nextElementSibling);

// const animaisLista = document.querySelector('.animais-lista');

// console.log(animaisLista.children);
// console.log(animaisLista.children[animaisLista.children.length-1]);

// console.log(animaisLista.querySelector('li:last-child'));

// console.log(animaisLista.previousElementSibling)

// const animais = document.querySelector(".animais")
// const contato = document.querySelector('.contato');
// const tituloContato = contato.querySelector('.titulo');

// // animaisLista.appendChild(tituloContato);

// const mapa = document.querySelector('.mapa');

// contato.insertBefore(animais,mapa);

// contato.replaceChild(mapa,tituloContato)

// const animaisUltimoElemento = animaisLista.querySelector('li:last-child');
// animaisLista.removeChild(animaisUltimoElemento);

// const novoh1 = document.createElement('h1'); 
// novoh1.innerText = "New Title";
// novoh1.classList.add("titulo");
// console.log(novoh1);

// mapa.appendChild(novoh1);

  // const h1 = document.querySelector('h1');
  // const faq = document.querySelector('.faq');

  // faq.appendChild(h1);

  // const cloneH1 = h1.cloneNode(true);
  // faq.appendChild(cloneH1);

// Exercicio

const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');

const cloneMenu = menu.cloneNode(true);

copy.appendChild(cloneMenu);

const faq = document.querySelector('.faq');
const primeitoDt = faq.querySelector('dt');

console.log(primeitoDt);

const proximoDD = primeitoDt.nextElementSibling;
console.log(proximoDD.remove())

const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML


