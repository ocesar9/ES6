export default function initFuncionamento(){
  const functionamento = document.querySelector('[data-semana]');
  const diaSemana = functionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = functionamento.dataset.horario.split(",").map(Number);

  console.log(diaSemana);
  console.log(horarioSemana);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diaSemana.indexOf(diaAgora) !== -1;
  const horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];


  console.log(semanaAberto)
  console.log(horarioAgora)

  if (horarioAberto){
    functionamento.classList.add('aberto');
  }

}

// const agora = new Date();
// const futuro = new Date('Dec 31 2022');

// console.log(agora);
// console.log(agora.getDate());
// console.log(agora.getDay());
// console.log(agora.getMonth());

// console.log(futuro);

// function transformarDias(tempo){
//   return tempo / (24 * 60 * 60 * 1000);
// }

// const diasAgora = transformarDias(agora.getTime())
// const diasFuturo = transformarDias(futuro.getTime())

// console.log(agora.getTime());
// console.log(futuro.getTime());

// console.log(diasAgora);
// console.log(diasFuturo);

// console.log(diasFuturo - diasAgora);






