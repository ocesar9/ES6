debugger
const btn = document.querySelector('button');
const section = document.querySelector('section');
const html = document.documentElement;

function handleClick(event){
  event.preventDefault();
  section.classList.add('active');
  html.addEventListener('active', handleOutside)
}

function handleOutside(event){
  section.classList.remove('active');
}

btn.addEventListener('click',handleClick);
btn.click();