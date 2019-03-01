
var btn3 = document.querySelector('#btn3');
btn3.addEventListener("click", tercero); 

var x = document.querySelector('#x');
var fx = document.querySelector('#fx');
var x0 = document.querySelector('#x0');
var x1 = document.querySelector('#x1');
var x2 = document.querySelector('#x2');
var x3 = document.querySelector('#x3');
var fx0 = document.querySelector('#fx0');
var fx1 = document.querySelector('#fx1'); 
var fx2 = document.querySelector('#fx2');
var fx3 = document.querySelector('#fx3');
var Everd1 = document.querySelector('#Everd1');

function tercero(){

    var ix = Number(x.value);
    var ix0 = Number(x0.value);
    var ix1 = Number(x1.value);
    var ifx0 = Number(fx0.value);
    var ifx1 = Number(fx1.value);
    var ifx2 = Number(fx2.value);
    var ifx3 = Number(fx3.value);


    var res = (((ix-ix1)/(ix0-ix1))*((ix-ix2)/(ix0-ix2))*((ix-ix3)/(ix0-ix3))*(ifx0)) + (((ix-ix0)/(ix1-ix0))*((ix-ix2)/(ix1-ix2))*((ix-ix3)/(ix1-ix3))*(ifx1)) +  (((ix-ix0)/(ix2-ix0))*((ix-ix1)/(ix2-ix1))*((ix-ix3)/(ix2-ix3))*(ifx2)) + (((ix-ix0)/(ix2-ix0))*((ix-ix1)/(ix2-x1))*((ix-ix2)/(ix3-ix2))*(ifx3));
    document.getElementById('res3').value = res;

}