const h1 = document.querySelector('h1');
const animaisDescricao = document.querySelector(".animais-descricao");
console.log(animaisDescricao.innerHTML)

console.log(animaisDescricao.innerText)

h1.innerHTML = '<p>Novo Titulo</p>';
// h1.innerText = "Novo Texto";

console.log(animaisDescricao.parentElement)
console.log(animaisDescricao.parentElement.parentElement)

console.log(h1.nextElementSibling);

const animaisLista = document.querySelector('.animais-lista');

console.log(animaisLista.children);
console.log(animaisLista.children[animaisLista.children.length-1]);

console.log(animaisLista.querySelector('li:last-child'));

console.log(animaisLista.previousElementSibling)

