export default class ValidarCpf{
  constructor(element){
    this.element = element;
  }
  limpar(cpf){
    return cpf.replace(/\D/g, '');
  }
  construir(cpf){
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
  }

  formatar(cpf){
    const cpfLimpo = this.limpar(cpf);
    return this.construir(cpfLimpo);
  }

  validar(cpf){
    const matchCpf = cpf.match(/(\d{3}[\s-.]?){3}\d{2}/g);
    console.log(cpf);
    console.log(matchCpf);  
    return (matchCpf && matchCpf[0] === cpf)
  }

  validarNaMudanca(cpfElement){
    if(this.validar(cpfElement.value)){
      cpfElement.value = this.formatar(cpfElement.value);
    }else{
      
    }
    console.log(this.validar(cpfElement.value));
  }

  adicionarEvento(){
    this.element.addEventListener('change', () => {
      this.validarNaMudanca(this.element);
    });
  }

  iniciar(){
    this.adicionarEvento();
    return this;
  }
}