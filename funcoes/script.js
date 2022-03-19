function areaQuadrado(lado){
    console.log('Funcao Ativa!');
    return lado*lado;
}
console.log(areaQuadrado(2));

function pi(){
    return 3.14;
}

console.log(pi);
var total = 5*pi();
console.log(total);

function imc (peso,altura) {
    var imc = peso / (altura*altura);
    return imc;
}
console.log(imc(80,1.8));

function corFavorita(cor){
    if(cor === 'azul'){
        return 'Eu gosto do ceu';
    } else if(cor === 'verde'){
        return 'Eu gosto da natureza';
    }else{
      return 'Eu nao gosto de cores';  
    }

}
console.log(corFavorita());

addEventListener('click',function(){
    console.log('Oi')
})

function mostraConsole(){
    console.log('Oi 2');
}

addEventListener('click', mostraConsole);

function imc2(peso, altura){
    const imc = peso / (altura ** 2);
    console.log(imc);
}

imc2(80,1.9);
console.log(imc2(80,1.9))

function terceiraIdade(idade){
    console.log(idade);
    console.log(typeof(idade));
    if(typeof(idade !== 'number')){
        return 'Por favor preencha um numero!'
    }
    if(idade >= 60){
        console.log('E idoso!');
        return true;
    }else {
        return false;
    }
}
console.log(terceiraIdade(30));
console.log(terceiraIdade("30"));

var totalPaises = 193;
function faltaVisitar(paisesVisitados){
        return `Faltam visitar ${totalPaises - paisesVisitados} paises`
}
console.log(faltaVisitar(3));
console.log(totalPaises)

var profissao = 'Designer';
function dados() {
    var nome = 'Julio';
    var idade = 23;
    function outrosDados() {
        var endereco = 'Pernambuco';
        var idade = 23;
        return `${nome}, ${idade}, ${endereco}, ${profissao}`;
    }
    return outrosDados();
}

console.log(dados())


imc3(100,1.9);
function imc3(peso, altura){
    const imc = peso / (altura ** 2);
    console.log(imc);
}

// Exercicio

function isTruthy(valor){
    return !!valor;
}
console.log(isTruthy(23));
console.log(isTruthy(``));
console.log(isTruthy(`True`));

function perimetro(lado){
    return 4*lado;
}
console.log(perimetro(4));

function nomeCompleto(nome,sobrenome){
    return `${nome} ${sobrenome}`
}
console.log(nomeCompleto(`Julio`,`Guimaraes`))

function par(valor){
   if(valor % 2 == 0){
       console.log("PAR")
   }else{
       console.log("IMPAR")
   }
}
console.log(par(8));

function tipo(valor){
    return typeof valor;
}
console.log(tipo('tipo'));
console.log(tipo(4));

addEventListener('scroll',function(){
    console.log(nomeCompleto('Julio', 'Guimaraes'));
});











