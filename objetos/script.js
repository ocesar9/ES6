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



