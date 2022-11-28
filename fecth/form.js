const inputCep = document.getElementById('cep');
const btnCep = document.querySelector('#btnCep');
const resultadoCep = document.querySelector('.resultadoCep');

btnCep.addEventListener('click', handleClick);
const btcDisplay = document.querySelector('.btc')

function handleClick(event){
  event.preventDefault();
  console.log(event);
  const cep = inputCep.value;
  console.log(cep);
  buscaCep(cep);
}

function buscaCep(cep){
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(response => response.text())
  .then(body => {
    resultadoCep.innerText = body;
  })
}

// https://www.blockchain.com/ticker

function fetchBTC(){
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(btcJson => {
    console.log(btcJson.BRL.buy)
    btcDisplay.innerText = ('R$ ' + btcJson.BRL.buy).replace('.', ',')
  })
}

setInterval(fetchBTC,1000 * 30)

fetchBTC();

const btnProxima = document.querySelector('.proxima');
const paragrafoPiada = document.querySelector('.piada');

function puxarPiada(){
  fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(piada => {
    console.log(piada.value);
    paragrafoPiada.innerText = piada.value
  })
}

btnProxima.addEventListener("click", puxarPiada)

puxarPiada()
