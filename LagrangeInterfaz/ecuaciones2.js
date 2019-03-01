

 var btn2 = document.querySelector('#btn2');
 btn2.addEventListener("click", segundo);

 var btn2 = document.querySelector('#btn2');
 btn2.addEventListener("click", porcentaje);


 var x = document.querySelector('#x');
 var fx = document.querySelector('#fx');
var x0 = document.querySelector('#x0');
var x1 = document.querySelector('#x1');
var x2 = document.querySelector('#x2');
var x3 = document.querySelector('#x3');
var fx0 = document.querySelector('#fx0');
var fx1 = document.querySelector('#fx1'); 
var fx2 = document.querySelector('#fx2');


function segundo(){
    var ix = Number(x.value);
    var ix0 = Number(x0.value);
    var ix1 = Number(x1.value);
    var ix2 = Number(x2.value);
    var ifx0 = Number(fx0.value);
    var ifx1 = Number(fx1.value);
    var ifx2 = Number(fx2.value);

    var res = ((((ix)-(ix1))/((ix0)-(ix1)))*(((ix)-(ix2))/((ix0)-(ix2)))*(ifx0))+((((ix)-(ix0))/((ix1)-(ix0)))*(((ix)-(ix2))/((ix1)-(ix2)))*(ifx1))+((((ix)-(ix0))/((ix2)-(ix0)))*(((ix)-(ix1))/((ix2)-(ix1)))*(ifx2));
    document.getElementById('res2').value = res;
}

var res2 = document.querySelector('#res2');


function porcentaje(){
    var ifx = Number(fx.value);
    var res = Number(res2.value);
    console.log(res);
    var resta = ifx - res;
    console.log(resta);
    var porcentaje = (resta / ifx) *100;
    document.getElementById('porce').value = porcentaje;
}
