//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, 
//utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function calculo (area,perimetro){
    area = Math.PI*(raio**2);
    perimetro = 2*Math.PI*raio;
    console.log(`A área da sala é ${area.toFixed()}`);
    console.log(`O perímetro da sala é ${perimetro.toFixed(2)}`);
}

let raio = parseFloat(prompt('Qual é o raio da sala?'));

calculo();
