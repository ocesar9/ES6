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