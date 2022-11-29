async function puxarDados(){
  try{
    const responseDados = await fetch('./dados.json');
    console.log("Isso");
    const jsonDados = await responseDados.json();
    console.log(jsonDados);
    document.body.innerText = jsonDados.aula;
  }
  catch(erro){
    console.log(erro);
  }
}

puxarDados();

async function puxarDados2(){
    const responseDados =  fetch('./dados.json');
    const responseClientes =  fetch('./clientes.json');

    const jsonDados = await (await responseDados).json();
    const jsonClientes = await (await responseClientes).json();
    console.log(jsonDados);
    console.log(jsonClientes);

}

puxarDados2(); 

async function asyncSemPromise(){
  await new Promise((resolve) => {
    setTimeout(() =>{
      console.log('Depois de 1s');
      resolve();
    },1000)
  })
  console.log('acabou')
}

asyncSemPromise();