//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, 
//a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

let peso = parseFloat(prompt('Qual é o seu peso? (KG)'));
console.log(peso);

let altura = parseFloat(prompt('Qual é a sua altura? (M)'));
console.log(altura);


function calculoImc(peso,altura){
    return imc = peso / (altura)**2
}

console.log(calculoImc(peso,altura));