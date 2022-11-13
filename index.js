let numero = prompt('Digite o numero desejado:');

let resultado = 0;
let Tabuada =  (`tabuada do ${numero}`);
let multi = 0;

while(multi < 10)
{
   multi = multi + 1; 
   resultado = numero * multi; 
   Tabuada = (`${Tabuada}\n ${numero} x ${multi} = ${resultado}`);   
}

confirm(`A tabuada do numero pedido é:\n ${Tabuada}`);