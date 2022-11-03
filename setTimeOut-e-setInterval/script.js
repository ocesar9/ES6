const button = document.querySelector('button')
const section = document.querySelector('section')

function handleClick(){
  setTimeout(function() {
    console.log(this)
    this.classList.add('active');
  },1000)
}

console.log('timeout 1');

setTimeout(function(){
  console.log('timeout 2');
},1000)

button.addEventListener('click',handleClick);

function espera(texto){
  console.log('Passou 0')
}

setTimeout(() => {
  console.log('Testando')
},0)

// for (let i = 0; i < 20; i++) {
//   console.log(i)
//   setTimeout(() => {
//     console.log(i)
//   },1000 *i)
// }

function loop(texto) {
  console.log(texto)
}

setInterval(loop,1000,"Passou 1s");

// loop a cada segundo

let i = 0;
const meuLoop = setInterval(()=>{
  console.log(i++)
  if(i > 20){
    clearInterval(meuLoop);
  }
},1000)
