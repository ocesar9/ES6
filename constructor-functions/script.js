function Carro(marcaAtribuida,precoAtribuido) {
  // this.marca = "Marca"
  // this.preco = 0
  this.marca = marcaAtribuida
  this.preco = precoAtribuido
}
console.log(Carro)

const fiat = new Carro();
fiat.marca = "Fiat";

console.log(fiat)

const honda = new Carro("Honda",3000);
console.log(honda);

const pegeut = new Carro("pegeut",5000);
console.log(pegeut);