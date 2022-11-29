fetch('https://pokeapi.co/api/v2/pokemon/')
.then(response => response.json())
.then((pokemon) =>{
  console.log(pokemon);
}) 


const url = 'https://jsonplaceholder.typicode.com/posts';
const options = {
  method: 'POST',
  body: '{"title": "Javascript"}',
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  }
  
} 
fetch(url, options)
.then(response => response.json())
.then(json => console.log(json))

const options2 = {
  method: 'HEAD',
  
} 
fetch(url, options)
.then(response => {
  console.log(response.headers.forEach(console.log))
})

fetch('https://www.google.com/')
.then(response => response.text())
.then((text) =>{
  console.log(text);
}) 


