var vp= document.getElementById('villaplatzi');
var papel= vp.getContext('2d');
var mapa='tile.png';

var fondo= new Image();
fondo.src=mapa;
fondo.addEventListener('load',dibujar);

var vaca= new Image();
vaca.src='vaca.png';
vaca.addEventListener('load',dibujarVaca);

var cerdo= new Image();
cerdo.src='cerdo.png';
cerdo.addEventListener('load',dibujarCerdo);

var pollo= new Image();
pollo.src='pollo.png';
pollo.addEventListener('load',dibujarPollo);


/*
var z;

for(var i=0;i<10;i++)
{
    z= aleatorio(10,20);
    document.write(z+', ');
}
*/
function dibujar() {
    papel.drawImage(fondo,0,0);
    
}

function dibujarVaca() {
    papel.drawImage(vaca,0,0);
    
}

function dibujarPollo() {
    papel.drawImage(pollo,100,100);
    
}

function dibujarCerdo() {
    papel.drawImage(cerdo,300,300);
    
}

function aleatorio(min,maxi) {
    var resultado;
    resultado= Math.floor(Math.random()*(maxi-min+1))+min;
    return resultado;

}
