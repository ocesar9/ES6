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

// Exercicio

  function $$(selectedElements){
    const elements = document.querySelectorAll(selectedElements);

    function hide(){
      elements.forEach(element => {
        element.style.display = 'none';
      })
      return this
    }

    function show(){
      elements.forEach(element => {
        element.style.display = 'initial';
      })
      return $$(selectedElements)
    }

    function on(onEvent,callback){
      elements.forEach(element => {
        element.addEventListener(onEvent, callback)
      })
    }

    function addClass(className){
      elements.forEach(element => {
        element.classList.add(className)
      })
    }

    function removeClass(className){
      elements.forEach(element => {
        element.classList.remove(className)
      })
    }

    return {
      elements,
      hide,
      show,
      on,
      addClass,
      removeClass
    }
  }

const btns = $$('button')
console.log(btns.hide().show())

function handleClick(event){
  console.log(event.target)
  btns.addClass('active')
}

btns.on('click', handleClick)

