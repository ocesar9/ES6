const cpfs = document.querySelectorAll('.cpf li');

// const arrayCpfs = [...cpfs];

// console.log(arrayCpfs);

function elementsInnerText([...elements]){
  // const arrayElements = Array.from(elements);
  return elements.map(element => element.innerText);
}

const limparCpfs = (cpf) => {
  return cpf.replace(/\D/g, '')
}

const construirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
}

const formatarCPFS = (cpfs) => {
  return cpfs.map(limparCpfs).map(construirCPF);
}

const substituirCPFS = (cpfsElements) => {
  const cpfs = elementsInnerText(cpfsElements)
  console.log(cpfs);
  const cpfsFormatados = formatarCPFS(cpfs);
  cpfsElements.forEach((element,index) => {
    element.innerText = cpfsFormatados[index];
  });

}

// console.log(limparCpfs('120.083.994-35'));
// console.log(construirCPF('12008399435'));

// const resultado = elementsInnerText(cpfs);

// console.log(formatarCPFS(resultado))

substituirCPFS(cpfs);