const pessoa = new Object({
  nome: "Julio"
})

console.log(pessoa)

const carro = {
  rodas:4,
  init(valor){
    this.marca = valor;
    return valor;
  },
  acelerar(){
    return this.marca + " acelerou";
  },
  buzinar(){
    return this.marca + "buzinou";
  }
}

const honda = Object.create(carro);
honda.marca = "Honda";
console.log(honda);
console.log(honda.acelerar());

const ford = Object.create(carro);
ford.init("Ford");
console.log(ford.acelerar());

const funcaoAutomovel = {
  acelerar(marca){
    return this.marca + " acelerou"
  },
  buzinar(){
    return "buzinou"
  }
}

const moto = {
  marca: "XR",
  rodas:2,
  capacete:true
}

Object.assign(moto,funcaoAutomovel);
console.log(moto.acelerar());

const moto$ = {
  capacete: true
}

console.log(moto$);

moto$.rodas = 5;

console.log(moto$);

Object.defineProperties(moto$,{
  rodas: {
    value:2,
    writable:false
  }
})

console.log(delete moto$.capacete)
console.log(moto$);

moto$.rodas = 5;
console.log(moto$);

Object.defineProperties(moto$,{
  rodas: {
    enumerable:true,
    get(){
      return this._rodas;
    },
    set(valor) {
      this._rodas = "Total de rodas " + valor *4 
    }
  }
})

console.log(moto$.rodas = 4);
console.log(moto$.rodas);

console.log(Object.getOwnPropertyDescriptors(Array.prototype));
console.log(Object.getOwnPropertyDescriptors(moto));

const innerHeightConfig = Object.getOwnPropertyDescriptor(window, 'innerHeight')
console.log(innerHeightConfig.configurable);

console.log(Object.getOwnPropertyNames(moto));
console.log(Object.keys(moto$));
console.log(Object.entries(moto$));

const frutas = ["Banana"]

console.log(Object.getPrototypeOf(frutas))

const frutas1 = ["Banana", "Uva"]
const frutas2 = ["Banana", "Uva"]

console.log(Object.is(frutas1 ,frutas2))

const novaFruta = frutas1;
console.log(Object.is(frutas1 ,novaFruta))

frutas1.push("Pera")

console.log(frutas1);
console.log(novaFruta);

carro.portas = 4;
Object.preventExtensions(carro);
carro.placa = "xx#4"
carro.portas = 6;
console.log(carro);

carro.portas = 4;
console.log(carro);

Object.freeze(carro);
carro.portas = 6;
console.log(carro);

Object.seal(carro);
carro.portas = 4;
carro.marca = "Honda"
console.log(carro);

console.log(Object.isFrozen(carro));
console.log(Object.isSealed(carro));
console.log(Object.isExtensible(carro));












