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
  rodas:2,
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
