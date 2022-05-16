var videogames = ['Switch', 'PS4', 'XBOX']
console.log(videogames);

console.log(videogames[2]);

videogames.pop()
console.log(videogames.length);
console.log(videogames);

videogames.push('3DS')
console.log(videogames);

for (var numero = 1; numero <= 10; numero++){
    console.log(numero);
}

var i = 0;
while(i < 10){
    console.log(i);
    i++;
}

var videogames2 = ['Switch', 'PS4', 'XBOX', '3DS']

for (let item = 0; item < videogames2.length; item++) {
    console.log(videogames2[item]);
    if(videogames2[item] === 'XBOX') {
        break;
    }
}

videogames2.forEach(function(item){
    console.log(item);
})

var frutas = ['banana', 'pera', 'abacaxi', 'uva']

frutas.forEach(function(fruta,index,array){
    frutas.pop();
    console.log(fruta,index,array)
})

var numero = 0;
var maximo = 50;
for(;numero < maximo;){
    console.log(numero)
    numero++;
}

// Exercicio

var titulosBrasilAno = ['1959', '1962', '1970', '1994', '2002']

for(let i = 0; i < titulosBrasilAno.length; i++){
    console.log(`O brasil ganhou a copa de ${titulosBrasilAno[i]}`)
}

var frutas2 = ['Banana','Maca', 'Pera', 'Uva', 'Melancia']

for (let i =0;i < frutas2.length; i++){
    console.log(frutas2[i])
    if(frutas2[i] === 'Pera'){
        break;
    }
}

var ultimaFruta = frutas2[frutas2.length-1]

console.log(frutas2);
console.log(ultimaFruta)

