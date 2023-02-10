function perimetroForma(lado, totalLados) {
  const argumentsArray = Array.from(arguments);
  console.log(argumentsArray);

  argumentsArray.forEach((argument) => {
    console.log(argument);
  });

  totalLados = totalLados || 4;
  return lado * totalLados;
}

console.log(perimetroForma(10, 4));
console.log(perimetroForma(10));

function perimetroForma2(...listaArgumentos) {
  console.log(listaArgumentos);
  listaArgumentos.forEach((argument) => console.log(argument));
}

perimetroForma2(10, 20, 30, 'Oi', 'Teste');

function anunciarGanhadores(premio, ...ganhadores) {
  ganhadores.forEach((ganhador) =>
    console.log(ganhador + ' ganhou um ' + premio),
  );
}

anunciarGanhadores("Carro","Perdo", "Marta")

const ganhadores = ["Perdo", "Marta"]

anunciarGanhadores('Carro', ...ganhadores);

const frutas = ['Banana','Uva', 'Morango'];
const legumes = ['Cenoura', 'Batata'];

const comidas = [...frutas, 'Pizza', ...legumes];

console.log(comidas)

const todosOsNumeros = [23,100,256,323,478,556,69,77];
const numeroMaximo = Math.max(...todosOsNumeros);

console.log(numeroMaximo)

const btns = document.querySelectorAll('button');
console.log(btns);

// const btnsArray = Array.from(btns);
const btnsArray = [...btns];

console.log(btnsArray);

// Exercicios

function createButton(background = 'blue',color = 'red') {
  // background = background || 'blue';
  // if(color === undefined){
  //   color= 'red';
  // }

  const buttonElement = document.createElement('button');
  buttonElement.style.background = background;
  buttonElement.style.color = color;
  return buttonElement;

}

const redButton = createButton();
console.log(redButton)

const frutas2 = ['Banana', 'Uva', 'Morango'];
const comidas2 = ['Pizza', 'Batata'];

comidas2.push(...frutas2);

console.log(comidas2);