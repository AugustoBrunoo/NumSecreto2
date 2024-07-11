//Crie uma função que converte um valor em dólar, passado como parâmetro, 
//e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$ 4,80.

let dolar = parseFloat(prompt('Qual valorr em dolar você tem: '));

function conversor(dolar){
    //cotacaoDoDolar = 4.80
    valorEmReais = 4.80 * dolar
    return valorEmReais.toFixed(2) // .toFixed, trasnforma qualquer valor em 2 casas decimais no final
}

let UsuTemReais = conversor(dolar);
console.log(`O valor de U$${dolar} equivale a R$ ${conversor(dolar)}`);