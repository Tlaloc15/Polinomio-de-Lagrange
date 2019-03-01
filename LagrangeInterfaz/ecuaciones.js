var btn1 = document.querySelector('#btn1');
btn1.addEventListener("click", lineal);

var btn1 = document.querySelector('#btn1');
btn1.addEventListener("click", porcentaje);

var ln = document.querySelector('#ln');
ln.addEventListener("click", desactiva);

var log = document.querySelector('#log');
log.addEventListener("click", activa);


    var x = document.querySelector('#x');
     var fx = document.querySelector('#fx');
    var x0 = document.querySelector('#x0');
    var x1 = document.querySelector('#x1');
    var x2 = document.querySelector('#x2');
    var x3 = document.querySelector('#x3');
    var fx0 = document.querySelector('#fx0');
    var fx1 = document.querySelector('#fx1'); 
    var fx2 = document.querySelector('#fx2');

   
function lineal(){
    var ix = Number(x.value);
    var ix0 = Number(x0.value);
    var ix1 = Number(x1.value);
    var ifx0 = Number(fx0.value);
    var ifx1 = Number(fx1.value);

    var res = (ifx0)*((ix-ix1)/(ix0-ix1)) + (ifx1)*((ix-ix0)/(ix1-ix0));
    document.getElementById('res1').value = res;
}

var res1 = document.querySelector('#res1');



function porcentaje(){
    var ifx = Number(fx.value);
    var res = Number(res1.value);
    console.log(res);
    var resta = ifx - res;
    console.log(resta);
    var porcentaje = (resta / ifx) *100;
    document.getElementById('porce').value = porcentaje;

}

function activa(){
    document.form.fx.disabled=false;
    document.form.porce.disabled=false;

}

function desactiva(){
    document.form.fx.disabled=true;
    document.form.porce.disabled=true;
    document.getElementById('porce').value = "No existe error relativo porcentual";

}




