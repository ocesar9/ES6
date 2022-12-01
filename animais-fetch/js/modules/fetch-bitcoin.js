export default function initFetchBitcoin() {
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then((bitcoin) => {
    const btcPreco = document.querySelector('.btc-preco');
    btcPreco.innerText = (100 /(bitcoin.BRL.sell)).toFixed(4)
    console.log(bitcoin.BRL.sell);
  }).catch(error => console.log((error)));
  
}


//https://bloackchain.info/ticker