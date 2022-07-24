// const menu =  document.querySelector('.menu');
// console.log(menu.classList);
// console.log(menu.classList[1]);

// menu.classList.add('ativo');
// console.log(menu.classList);

// menu.classList.remove('azul');
// console.log(menu.classList);

// menu.classList.toggle('azul');
// console.log(menu.classList);
// menu.classList.toggle('azul');
// console.log(menu.classList);


// if (menu.classList.contains('azul')){
//   menu.classList.add('possui-azul');
// }else{
//   menu.classList.add('nao-possui-azul');
// }

// menu.className = 'ativo teste azul';

// console.log(menu.classList);

// menu.className = menu.className + ' ativo teste';
// menu.className += ' ativo teste';
// console.log(menu.classList);

// // ReadOnly
// const animais = document.querySelector('.animais');
// console.log(animais.attributes[0]);
// console.log(animais.attributes.id);
// console.log(animais.attributes['data-texto'])

// const img = document.querySelector('img');
// console.log(img.getAttribute('alt'));

// const srcImg = img.getAttribute('src');
// console.log(srcImg);

// img.setAttribute('alt', 'E uma raposa')
// console.log(img.getAttribute('alt'))


// const possuiAlt = img.hasAttribute('alt');
// console.log(possuiAlt);


// const carro = {
//   portas:4,
//   andar:function(km){
//     console.log(`Andou tantos ${km} km`)
//   }
// }

// console.log(carro.andar(6));

// Exercicio

const menuItens = document.querySelectorAll(".menu a");
menuItens.forEach((item) => {
  item.classList.add("ativo");
})
console.log(menuItens);

menuItens.forEach((item) => {
  item.classList.remove("ativo");
})

console.log(menuItens);

menuItens[0].classList.add("ativo");

console.log(menuItens);


const imgs = document.querySelectorAll("img");
imgs.forEach((img)=>{
  const possuiAtributo = img.hasAttribute("alt");
  console.log(img,possuiAtributo)
})

const link = document.querySelector("a[href^='http']");
link.setAttribute("href", "https://www.google.com");
console.log(link);
