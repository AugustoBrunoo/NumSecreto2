//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function calcularFatorial(numero){
    if(numero === 0 || numero === 1){
        return 1
    }
    let fatorial = 1
// cada laço ele atualiza o fatorial, dando o numero que você deseja.
    for(let i = 2; i <= numero; i++){
      fatorial *= i // factorial = factorial * i 
    }
    return fatorial
}

let numero = 5;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);
