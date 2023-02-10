const carro = {
  marca: 'Honda',
  ano: 2018
}

const {marca,ano, portas} = carro;


console.log(marca, ano);
console.log(portas);

const cliente = {
  nome: 'Andre',
  compras: {
    digitais:{
      livros: ['Livro 1', 'Livro 2'],
      videos: ['Videos 1', 'Videos 2'],
    },
    fisicas: {
      cadernos: ['Cadernos 1']
    }
  },
}

console.log(cliente.compras.digitais.livros);
console.log(cliente.compras.digitais.videos);


const {digitais, fisicas, digitais:{livros,videos}} = cliente.compras;
console.log(digitais);
console.log(fisicas)
console.log(livros);
console.log(videos);

const cliente2 = {
  nome: 'andre',
  compras:10
}

const {nome: nomeJulio, email = 'julio@gmail.com'} = cliente2;
console.log(nomeJulio);
console.log(email);


const frutas = ['Banana', 'Uva', 'Morango'];

const [primeira,segunda,terceira] = frutas;

console.log(terceira);

function handlekeyup({key, keyCode}){
  console.log(key, keyCode)
}
document.addEventListener('keyup', handlekeyup);