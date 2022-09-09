var texto=document.getElementById('texto_lineas');
var boton=document.getElementById('botoncito');
boton.addEventListener('click',dibujoPorClick);


var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho= d.width;


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle= color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();

}

function dibujoPorClick() {
    var lineas = parseInt(texto.value);
    var cuenta=0;
    var yi,xf;
    var espacio= ancho/ lineas;

    while (cuenta<lineas) {
        yi=espacio*cuenta;
        xf=espacio*(cuenta+1)
        dibujarLinea("#AAF",0,yi,xf,300);
        dibujarLinea('#AFF',yi,0,300,xf);
        cuenta=cuenta+1;
        console.log(`linea ${cuenta}`);
    
    }
    dibujarLinea('#AFA',1,1,1,300);
    dibujarLinea('#AFA',1,299,299,299);


    }

