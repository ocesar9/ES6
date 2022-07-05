const img = document.querySelectorAll("img");
console.log(img);

let i = 0;
img.forEach(function(item,index,array){
  console.log(i++);
  console.log(item,index,array);
});

const titulos = document.getElementsByClassName("titulo");
const titulosArray = Array.from(titulos);

console.log(titulos);
console.log(titulosArray);

const img2 = document.querySelectorAll("img");

img2.forEach((item,index) =>{
  console.log(item,index);
});

let f = 0;
img2.forEach(() => {
  console.log(f++);
});

let j = 0;
img2.forEach(() => console.log(j++));
img2.forEach((item) => console.log(item));

// Exercicio

const paragrafo = document.querySelectorAll("p");
const paragrafoArray = Array.from(paragrafo);

paragrafoArray.forEach((item)=> console.log(item));

paragrafoArray.forEach((item)=> console.log(item.innerHTML));

const imgs = document.querySelectorAll("img");

imgs.forEach((item,index) => {
  console.log(item,index);
});


let x = 0;
imgs.forEach(() =>{
  console.log(x++);
})

imgs.forEach(() => x++);




