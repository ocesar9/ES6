const promesa = new Promise((resolve,reject) => {
  let condicao = false;
  if(condicao){
    setTimeout(()=>{
      resolve({nome:'Julio', idade:23});
    },1000)
  }else{
    reject('Um erro ocorreu na promise');
  }
})

const retorno = promesa
.then((resolucao) => {
  resolucao.profissao = 'Frontend';
  return resolucao;
})
.then((resolucao) => {
  console.log(resolucao);
})
.catch((rejeitada) => {
  console.log(rejeitada);
})
.finally(() => {
  console.log("Finalizou");
})

console.log(promesa);
console.log(retorno);

const login = new Promise((resolve) => {
  setTimeout(()=>{
    resolve('Usuario logado')
  },2000)
})

const dados = new Promise((resolve) => {
  setTimeout(()=>{
    resolve('Dados carregados')
  },1500)
})

const carregouTudo = Promise.all([login,dados]);

carregouTudo.then((resolucao) => {
  console.log(resolucao);
})

const carregouTudo2 = Promise.race([login,dados]);

carregouTudo2.then((resolucao) => {
  console.log(resolucao);
})