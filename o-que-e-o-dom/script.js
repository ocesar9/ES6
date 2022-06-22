// window.alert('Isso mesmo');
// alert('Isso mesmo!');
const href = window.location.href
console.log(href);

if(href === 'http://127.0.0.1:5500/o-que-e-o-dom/index.html'){
  console.log('Igual!')
}

const h1Selecionado = document.querySelector('h1');
console.log(h1Selecionado);

const classSelecionado = h1Selecionado.classList
console.log(classSelecionado);

function callbackh1(){
  console.log(`Clicou em ${h1Selecionado.innerText} callbackh1`);

}
h1Selecionado.addEventListener('click', callbackh1);

h1Selecionado.addEventListener('click', function() {
  console.log(`Clicou em ${h1Selecionado.innerText}`);
})

// Exercicio

const urlAtual = document.location.href
console.log(urlAtual);

const elementoAtivo = document.querySelector('.ativo')
console.log(elementoAtivo);

const linguagemNavegador = window.navigator.language
console.log(linguagemNavegador)

const larguraJanela = window.innerWidth
console.log(larguraJanela);