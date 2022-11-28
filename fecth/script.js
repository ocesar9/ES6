const doc = fetch('./doc.txt');
const style = fetch('./style.css');
const cep = fetch('https://viacep.com.br/ws/01001000/json/');
const conteudo = document.querySelector('.conteudo');
const styleElement = document.createElement('style');
const div = document.createElement('div');
const sobre = fetch('./sobre.html')
console.log(doc);

doc.then(r => {
  return r.text();
}).then((body) => {
  conteudo.innerText = body;
  
})

console.log(cep);

cep.then(r => {
  return r.json();
}).then((body) => {
  console.log(body.logradouro);
})

style.then(r => r.text())
.then((body) => {
  styleElement.innerHTML = body;
  conteudo.appendChild(styleElement);
})

sobre.then(r => r.text())
.then((body) => {
  div.innerHTML = body;
  const titulo = div.querySelector('h1');
  document.querySelector('h1').innerText = titulo.innerText;
  console.log(titulo);
})