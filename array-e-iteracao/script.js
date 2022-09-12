const carros = ["Ford", "Fiat", "Honda"];
carros.forEach(function (item,index,array) {
  // array[index] = "Teste"
  console.log(item.toUpperCase(),index,array);
})

console.log(carros);

const li = document.querySelectorAll("li");

const retornoForEach = li.forEach((item,index) => {
  item.classList.add("ativa" + index)
})

console.log(li);
console.log(retornoForEach);

const retornoMap = carros.map((item,index,array) => {
  console.log(item,index,array)
  return item.toUpperCase();
})

console.log(retornoMap);
console.log(retornoMap[1] = "Teste");
console.log(retornoMap);

const numeros = [2,4,5,6,7];
const numerosx2 = numeros.map((n) => n*2);
console.log(numerosx2);

const aulas = [
  {
    nome: "HTML 1",
    min: 14
  },
  {
    nome: "HTML 2",
    min: 10
  },
  {
    nome: "CSS 1",
    min: 20
  },
  {
    nome: "JS 1",
    min: 25
  },
]

const tempoAulas = aulas.map((a) => a.min);
console.log(tempoAulas);

const nomeAulas = aula => aula.nome

const arrayNomeAulas = aulas.map(function(aula){
  return aula.nome
})

console.log(arrayNomeAulas);


const aula$ = [10,25,30]

const reduceAulas = aula$.reduce((acumulador,item,index,array) => {
  console.log(acumulador,item,index,array);
  return acumulador + item;
})

console.log(reduceAulas);

const numero$ = [10,25,30,3,54,33,22]

const maiorNumero = numero$.reduce((anterior,atual) => {
  if(anterior > atual){
    return anterior
  }else{
    return atual
  }
})

const maiorNumero2 = numero$.reduce((anterior,atual) => anterior > atual ? anterior : atual,0)

console.log(maiorNumero);
console.log(maiorNumero2);


// var acumulador = {}
// acumulador[0] = "dfssfds"
const listaAulas = aulas.reduce((acumulador,aula,index) => {
  acumulador[index] = aula.nome
  return acumulador
})

console.log(listaAulas);

const frutas = ["Banana", "Pera", "Uva", ""];

const frutasRight = frutas.reduceRight((acc,fruta) => acc + "" + fruta);
const frutasleft = frutas.reduce((acc,fruta) => acc + "" + fruta);
console.log(frutasRight);
console.log(frutasleft);

const temUva = frutas.some((item)=>{
  console.log(item);
  return item === "Uva"
})

console.log(temUva);

const every = frutas.every((item)=>{
  console.log(item);
  return item;
})
console.log(every);

const num3ros = [6,43,22,88,101,29]
const maiorQueTres = numeros.every(n => n >= 6);
console.log(maiorQueTres);

const indexUva = frutas.findIndex(item => {
  return item === "Uva"
})

console.log("Index uva:",indexUva);

const fruta$ = ["Bananas", undefined,null,"","Uva", 0, "Maca"]

const arrayFrutas = fruta$.filter((item)=>{
  console.log(item);
  return item;
})

console.log(arrayFrutas);

const maiores15 = [aulas.filter((aula)=>{
  console.log(aula.min);
  return aula.min > 15;
})]

console.log(maiores15);

// Exercicios

  const cursos = document.querySelectorAll(".curso")
  const arrayCursos = Array.from(cursos);

  console.log(cursos);
  console.log(arrayCursos);


  const objetoCurso = arrayCursos.map((curso)=>{
    const titulo = curso.querySelector("h1").innerText;
    const descricao = curso.querySelector("p").innerText;
    const aulas = curso.querySelector(".aulas").innerText;
    const horas = curso.querySelector(".horas").innerText;

    return {
      titulo,
      descricao,
      aulas,
      horas
    }
  })

  console.log(objetoCurso);


  const numeros$ = [3,44,333,23,122,322,33]

  const maioresQue100 = numeros$.filter(n => n > 100);

  console.log(maioresQue100);

  const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"]

  const possuiBaixo = instrumentos.some((instrumento)=> {
    return instrumento === "Baixo"
  })

  console.log(possuiBaixo);

  const compras = [
    {
      item: 'Banana',
      preco: 'R$ 4,99'
    },
    {
      item: 'Ovo',
      preco: 'R$ 2,99'
    },
    {
      item: 'Carne',
      preco: 'R$ 25,49'
    },
    {
      item: 'Refrigerante',
      preco: 'R$ 5,35'
    },
    {
      item: 'Quejo',
      preco: 'R$ 10,60'
    },
    {
      item: 'Arroz',
      preco: 'R$ 5,50'
    }
  ]

  const valorTotal = compras.reduce((acumulador,item) => {
    const precoLimpo = +item.preco.replace("R$", "").replace(",", ".");
    return acumulador + precoLimpo;
  },0)

  console.log(valorTotal);






