class Veiculo {
  constructor(rodas, combustivel){
    this.rodas = rodas;
    this.combustivel = combustivel;
  }
  acelerar(){
    console.log("acelerou");
  }
}

class Moto extends Veiculo{
  constructor(rodas,capacete,combustivel){
    super(rodas,combustivel);
    this.capacete = capacete;
  }
  acelerar(){
    super.acelerar();
    console.log("acelerou rapido");
  }
  empinar(){
    console.log("Moto empinou com " + this.rodas + " rodas");
  }
}

const honda = new Moto(2,'Gasolina',true);
const civic = new Veiculo(4);

