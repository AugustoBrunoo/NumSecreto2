//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function selecao(num1,num2){
    if(num1 > num2){
        return num1;
    } else {
        return num2;
    }
} 

let resultado = selecao(4,1);

console.log(resultado);
