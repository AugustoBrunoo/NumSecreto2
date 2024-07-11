//Aprovação é 5 
let nota1 = 7;
let nota2 = 6;
let nota3 = 3;
let nota4 = 5;

media = calcularMedia();

function calcularMedia(nota1,nota2,nota3,nota4){
    return parseInt((nota1+nota2+nota3+nota4)/2);
}

function verificarAprovacao(){
   return media >= 5 ? 'Aprovado' : 'Reprovado';
}

verificacao = verificarAprovacao();

console.log(verificacao);