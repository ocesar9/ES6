const animais = document.getElementById('animais');
console.log(animais.innerText);

const gridSection = document.getElementsByClassName('grid-section'); 

console.log(gridSection);
console.log(gridSection.length);
console.log(gridSection[0]);

const primeiraLi = document.querySelector('li');
console.log(primeiraLi)

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl)

const linksInterno = document.querySelector('[href^="#"')
console.log(linksInterno);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);
console.log(animaisImg[2]);

const gridSectionHtml = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

console.log(gridSectionHtml);
console.log(gridSectionNode);

primeiraUl.classList.add('grid-section');

console.log(gridSectionHtml[0]);
console.log(gridSectionNode[0]);

gridSectionNode.forEach(function(item,index){
  console.log(item);
  console.log(index);
})

const arrayGrid = Array.from(gridSectionHtml);

arrayGrid.forEach(function(item){
  console.log(item);
})

console.log(arrayGrid);
arrayGrid.pop();
console.log(arrayGrid);

// Exercicio

const images = document.querySelectorAll('img');
console.log(images);

const imagens = document.querySelectorAll("[src^='img/imagem'");
console.log(imagens);

const linksInternos = document.querySelectorAll("[href^='#'");
console.log(linksInternos);

const primeitoh2 = document.querySelector(".animais-descricao h2");
console.log(primeitoh2);

const ultimoP = document.querySelectorAll("p");
console.log(ultimoP[ultimoP.length - 1])



