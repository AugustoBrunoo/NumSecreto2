// Revisando a aula de hoje
// Utilizando funções com parametros - parte 1 
// Funções com retorno - parte 2 
// Fazer Funcionar o input (onde usuário coloca o número)
numSecreto = gerarNumAleatorio()

function exibirMensagemNaTela(tag,texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
}

exibirMensagemNaTela('h1','Bem-Vindo ao jogo do número secreto');
exibirMensagemNaTela('p','Escolha um número de 1 - 10: ');

function gerarNumAleatorio(){
    return parseInt(Math.random()*10)+1;
}
// Responsável pelo clickbutton
function verificarChute(){
    let chute = document.querySelector('input').value
    console.log(chute == numSecreto);
}