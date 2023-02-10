const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isso e Javascript';

for(const fruta of frutas){
  console.log(fruta);
}

for(const char of frase){
  console.log(char);
}


const butons = document.querySelectorAll('button');

for(const btn of butons){
  btn.style.color = 'blue';
}



// fetch('https://pokeapi.co/api/v2/pokemon')
// .then(response => console.log(response))

const carro = {
  marca: 'Honda',
  ano:2018
}

Object.defineProperties(carro, {
  rodas: {
    value:4,
    // enumerable:false,
    enumerable:true,
  }
})

console.log(carro);

for(const key in carro){
  console.log(key, carro[key]);
}

for(const f in frutas){
  console.log(f, frutas[f])
}


// Uncaught TypeError: carro is not iterable

// for(const chave of carro){
//   console.log(chave);
// }


const btnUnico = document.querySelector('button')
const btnStyles = getComputedStyle(btnUnico);

for(const style in btnStyles){
  console.log(`${style}:${btnStyles[style]}`)
}


let i = 0;
do {
  console.log(i++);
}while (i<=20);

// Exercicio

  const itens = document.querySelectorAll('li');

  for(const item of itens){
    item.classList.add('ativo'); 
  }



  for(const windowKey in window){
    console.log(`${windowKey}, ${window[windowKey]}`)
  }