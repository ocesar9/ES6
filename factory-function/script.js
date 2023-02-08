// function createButton(text){
//   const numeroSecreto = 'sadaslkdad'

//   function element(){
//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = text;
//     return buttonElement;
//   }
//   // return {
//   //   text,
//   //   element,
//   //   numeroSecreto
//   // }

//   return Object.freeze({
//     text,
//     element
//   })
// }

// const btnComprar = createButton('comprar');
// const btnVender = createButton('Vender');

// console.log(btnComprar, btnVender);

// btnComprar.text = 'Novo texto'

// console.log(btnComprar, btnVender);

function Pessoa(nome){
  // if(!(this instanceof Pessoa))
  // return new Pessoa(nome);
  //   console.log('sim')
  // this.nome = nome;
  if(!new.target)
    return new Pessoa(nome);
    console.log('sim')
    this.nome = nome;

}

Pessoa.prototype.andar = function(){
  return `${this.nome} andou`
}

const designer1 = Pessoa('julio');
console.log(designer1);

const designer2 = new Pessoa('cesar');
console.log(designer2);