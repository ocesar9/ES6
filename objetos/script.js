var pessoa = {
  nome: "Julio",
  idade: 28,
};

console.log(pessoa);
console.log(pessoa.idade);

var quadrado = {
  lados:4,
  area: function(lado){
    return lado*lado
  },
  perimeto: function(lado){
    return this.lados*lado;
  },
  cinco(){
    return 5;
  }
}
console.log(quadrado.area(5));
console.log(quadrado.perimeto(5));
console.log(quadrado.cinco());

console.log(Math.PI)
console.log(Math.random())

var a = {}
console.log(typeof a);

var height = 120;
var menu = {
  with: 800,
  height: 50,
  backgroundColor: '#84e',
  metadeheight(){
    return this.height/2;
  }
}
console.log(menu.backgroundColor)
menu.backgroundColor = '#000000';
console.log(menu.backgroundColor)

var bg = menu.backgroundColor
bg = 'blue'
console.log(menu.backgroundColor)

menu.esconder = function() {
  console.log('Escondi')
}
menu.esconder();
console.log(menu.metadeheight());

console.log(menu.hasOwnProperty('backgroundColor'))

// Exercicio

var eu = {
  nome: 'Julio',
  sobrenome: 'Guimaraes',
  idade: 23,
  genero: 'masculino',
  meunome(){
    return `${this.nome} ${this.sobrenome}`;
  }
}
console.log(eu.meunome());

var carro = {
  preco: 1000,
  portas: 4,
  marcar: 'Audi'
}

carro.preco = 3000
console.log(carro);

var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  late(pessoa){
    if(pessoa === 'homem'){
      console.log("Au au!")
    }else if (pessoa === 'mulher'){
      console.log('Cara de bobo!')
    }
  }
}

cachorro.late(`homem`);
cachorro.late(`mulher`);






