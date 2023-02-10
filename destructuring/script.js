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

// Exercicios

  const btn = document.querySelector('button');
  const {backgroundColor,margin,color} = window.getComputedStyle(btn);

  console.log(backgroundColor, margin, color);


  let cursoAtivo = 'JavaScript';
  let cursoInativo = 'HTML';

  [cursoAtivo,cursoInativo] = [cursoInativo,cursoAtivo];
  console.log(cursoAtivo,cursoInativo);

  const cachorro = {
    nome:'Bob',
    raca: 'Labrador',
    cor: 'Amarelo'
  }

  const {cor:bobCor } = cachorro;
  
  console.log(bobCor)