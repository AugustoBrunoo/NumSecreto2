//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function fatorial(numero){
    for(let i = numero - 1; i > 0; i--){
        let resultado = numero * i
        console.log(`${numero}! = ${numero} X ${i} = ${resultado}`);
    }
}

numero = 5;
fatorial(numero);