//Teniendo en cuenta que el valor de x0, x1, x2 y x tienen un valor específico como independiente y f0, f1, f2, f3 y f es la funcion ordenada al origen

var btnCalcular = document.querySelector('#Calcular');
btnCalcular.addEventListener('click', Calcular);

function Calcular() {
    var x0 = document.querySelector('#x0');
    var x1 = document.querySelector('#x1');
    var x2 = document.querySelector('#x2');
    var x = document.querySelector('#x');
    var f0 = document.querySelector('#f0');
    var f1 = document.querySelector('#f1');
    var f2 = document.querySelector('#f2');
    var fx1 = document.querySelector('#fx1');
    var fx2 = document.querySelector('#fx2');


    var fx1 = (f0.value)*((x.value)-(x1.value))/((x0.value)-(x1.value))+(f1.value)*((x.value)-(x0.value))/((x1.value)-(x0.value));

    var fx2 = ((((x.value)-(x1.value))/((x0.value)-(x1.value)))*(((x.value)-(x2.value))/((x0.value)-(x2.value)))*(f0.value))+((((x.value)-(x0.value))/((x1.value)-(x0.value)))*(((x.value)-(x2.value))/((x1.value)-(x2.value)))*(f1.value))+((((x.value)-(x0.value))/((x2.value)-(x0.value)))*(((x.value)-(x1.value))/((x2.value)-(x1.value)))*(f2.value));
    
    var inputFx1 = document.querySelector('#fx1');
    inputFx1.value = fx1;

    var inputFx2 = document.querySelector('#fx2');
    inputFx2.value = fx2;
}



var x0 = 2;
var x1 = 4;
var x2 = 1;
var f0 = 640;
var f1 = 2790;
var f2 = 425;
var x = 3;
var fx1 = 0;
var fx2 = 0;

fx1 = f0*((x-x1)/(x0-x1))+f1*((x-x0)/(x1-x0));

fx2 = (((x-x1)/(x0-x1))*((x-x2)/(x0-x2))*f0)+(((x-x0)/(x1-x0))*((x-x2)/(x1-x2))*f1)+(((x-x0)/(x2-x0))*((x-x1)/(x2-x1))*f2);

console.log(fx1);
console.log(fx2);






