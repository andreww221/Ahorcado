


const canvas = document.querySelector(".tablero");



const espacio = canvas.getContext("2d");



function dibujarCabeza(){
    espacio.beginPath();
    espacio.lineWidth = 5;
    espacio.strokeStyle = "#212121";
    espacio.fillStyle = "#FFCC80";
    
    let x = (canvas.clientWidth/2)-20,
        y = 35,
        radio = 20,
        anguloInicio = 0,
        anguloFin = Math.PI * 2;
        espacio.arc(x, y, radio, anguloInicio, anguloFin);
    
    espacio.stroke();
    espacio.fill();    

}


function dibujarCuerpo(){

    espacio.moveTo((canvas.clientWidth/2)-20,55 );
    espacio.lineTo((canvas.clientWidth/2)-20, 130);
    espacio.stroke();
}



function dibujarManoIzquierda(){

    espacio.moveTo((canvas.clientWidth/2)-20, 70 );
    espacio.lineTo((canvas.clientWidth/2)-60,80);
    espacio.stroke();
}


function dibujarManoDerecha(){

    espacio.moveTo((canvas.clientWidth/2)-20, 70 );
    espacio.lineTo((canvas.clientWidth/2)+18,80);
    espacio.stroke();
}



function dibujarPieIzquierdo(){


    espacio.moveTo((canvas.clientWidth/2)-20 ,129 );
    espacio.lineTo(140,150);
    espacio.stroke();

}


function dibujarPieDerecho(){


    espacio.moveTo((canvas.clientWidth/2)-20 ,129 );
    espacio.lineTo(170,150);
    espacio.stroke();

}









function dibujarManos(){

    dibujarManoIzquierda();
    dibujarManoDerecha();
}


function dibujarPies(){
    dibujarPieIzquierdo();

    dibujarPieDerecho();
    
}



function dibujarHorca(){


    espacio.moveTo((canvas.clientWidth/2)-100 ,0);
    espacio.lineTo((canvas.clientWidth/2)-100,150);
    espacio.stroke();


}


function dibujarTechoHorca(){

    espacio.moveTo((canvas.clientWidth/2)-100 ,3);
    espacio.lineTo((canvas.clientWidth/2)-20,2);
    espacio.stroke();


}


function dibujarSoga(){

    espacio.moveTo((canvas.clientWidth/2)-20,2);
    espacio.lineTo((canvas.clientWidth/2)-20,60);
    espacio.stroke();

}






export {dibujarCabeza,dibujarCuerpo,dibujarManos,dibujarPies,dibujarHorca,dibujarTechoHorca,dibujarSoga}



