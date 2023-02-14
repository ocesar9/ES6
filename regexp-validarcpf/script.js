import ValidarCpf from "./validar-cpf.js";

const cpf = document.querySelector('#cpf');
const validarCpf = new ValidarCpf(cpf);
console.log(validarCpf.formatar('120 083 994 35'))