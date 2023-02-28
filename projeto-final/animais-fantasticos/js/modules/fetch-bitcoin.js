export default function fetchBitcoin(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((bitcoin) => {
      const btcPreco = document.querySelector(target);
      btcPreco.innerText = (100 / bitcoin.BRL.sell).toFixed(4);
      console.log(bitcoin.BRL.sell);
    })
    .catch((error) => console.log(error));
}

// https://bloackchain.info/ticker
