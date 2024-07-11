//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
//Além do parenteses, ele funciona como um bloco, não esqueça da {}
function tabuada(numero){
    for(let i = 1; i <= 10; i++){
      let resultado = numero * i
      console.log(`${numero} X ${i} = ${resultado}`);
    }
}

let numero = parseInt(prompt('Digite um número para a tabuada: '));
tabuada(numero);