import AnimaNumeros from './anima-numeros.js';

export default function fetchAnimais(url, target) {
  // create an div with the data of the animals
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // animate the numbers of every animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
    animaNumeros.init();
  }

  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }
  // get the animals through the json file
  // create animal by createAnimal
  async function criarAnimais() {
    try {
      // Fetch, wait the response, transform to json
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      // After transformation activate functions to fill and animate numbers
      animaisJSON.forEach((animal) => {
        preencherAnimais(animal);
      });
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }
  return criarAnimais();
}
