console.log(Number.isNaN(5));
console.log(Number.isNaN("ds"));
console.log(Number.isNaN(NaN));

console.log(Number.isInteger(5));


console.log(parseFloat("34.3434,23"))
console.log(parseFloat("100 reais"))
console.log(parseInt("100.34 reais"))

const preco = 2.34445;
console.log(preco.toFixed());
console.log(preco.toString());


console.log(preco.toLocaleString("pt-br",{style:'currency',currency: "BRL"}));


console.log(Math.PI)

console.log(Math.abs(3-7));
console.log(Math.ceil(5.1));
console.log(Math.floor(5.9));
console.log(Math.round(5.45));

console.log(Math.max(5,45,34,12,50,69,32));
console.log(Math.min(5,45,34,12,50,69,32));
console.log(Math.random());
console.log(Math.random()*100);

console.log(Math.floor(Math.random()*10))

// Exercicio

  const aleatorio = Math.floor(Math.random()*(2000 - 1050 + 1) + 1050)
  console.log(aleatorio);


  const numeros = '4,5,20,8,9'
  const arrayNumeros = numeros.split(',');
  console.log(arrayNumeros);
  const numeroMaximo = Math.max(...arrayNumeros);
  console.log(numeroMaximo);

  const listaPrecos = ["R$ 59,99", "R$ 100,22", "R$ 230", " r$ 200"];

  function limpaPreco(preco) {
    preco = +preco.toUpperCase().replace("R$", "").trim().replace(",", ".");
    preco = +preco.toFixed(2);
    return preco;
  }
  let soma = 0;
  listaPrecos.forEach((preco) =>{
    soma += limpaPreco(preco)
  })
  console.log(soma.toLocaleString("pt-br",{style:'currency',currency: "BRL"}))
  console.log(preco);


