function Pessoa(nome, idade){
  this.nome = nome;
  this.idade = idade;
  this.abracar = function(){
    return `${this.nome} abracou`
  }
  this.andar = function(){
    return `${this.nome} andou pelo objeto`
  }
}

Pessoa.prototype.andar = function(){
  return `${this.nome} andou`
}

Pessoa.prototype.nadar = function(){
  return `${this.nome} nadou`
}

const andre = new Pessoa("Andre",28)

console.log(Pessoa.prototype)
console.log(andre.prototype)

console.log(andre.andar())
console.log(andre.nadar())
console.log(andre.abracar())




