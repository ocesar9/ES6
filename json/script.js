fetch('./dados.json')
.then(r => r.json())
.then(json => {
  console.log(json[0].aula);
  json.forEach(aula => {
    console.log(aula);
  });
})

const configuracoes = {
  player: "Google",
  tempo: 25.5,
  aula: "2.1 Javascript"
}

const stringConfig = JSON.stringify(configuracoes);
console.log(stringConfig);

localStorage.config = JSON.stringify(configuracoes);
console.log(JSON.parse(localStorage.config));