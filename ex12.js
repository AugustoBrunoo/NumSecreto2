//Crie uma função que mostre na tela a (área) e o (perímetro) de uma sala retangular,
//utilizando altura e largura que serão dadas como parâmetro.
// utilizei a altura e a base como parametros para poder reutilizar se for necessario ou deixar organizado
// ex calculo(10,20) se caso necessite, nao precisarei mexer no código

function calculo(altura,base){
    area = base*altura;
    perimetro = (2*base) + (2*altura);

    console.log(`A área dessa sala é ${area} m2`);
    console.log(`O perímetro dessa sala é ${perimetro} m`);
}


let altura = parseFloat(prompt('Digite o valor da altura: '))
let base = parseFloat(prompt('Digite o valor da largura (base): '))

calculo(altura,base);