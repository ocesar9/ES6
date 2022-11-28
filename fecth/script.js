const doc = fetch('./doc.txt');
const docError = fetch('./docs.txt');
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
  const r2 = r.clone();
  const rText = r.text();
  rText.then((text) => {
    console.log(text);
  })

  const rJson = r2.json();
  rJson.then((body) => {
    console.log(body.logradouro);
  })
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

const imagem = fetch('./imagem.jpg');
imagem.then((r) => r.blob())
.then((body) => {
  const blobURL = URL.createObjectURL(body);
  const imagemDom = document.querySelector('img');
  imagemDom.src = blobURL;

  console.log(body);
  console.log(blobURL);
});


cep.then((response) => {
  console.log(response.status);
  response.headers.forEach(console.log)
})

const array = ["ITEM 1","ITEM 2","ITEM 3"]
array.forEach(console.log);

docError.then((response) =>{
  console.log(response.status);
  console.log(response.url);
  console.log(response.type);
  if(response.status === 404){
    console.log("Pagina nao existe");
  }
})
