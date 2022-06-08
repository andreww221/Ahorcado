import { dibujarCabeza, dibujarCuerpo, dibujarHorca, dibujarManos, dibujarPies, dibujarSoga, dibujarTechoHorca } from "./dibujar.js";





function errores(numero){


    if(numero==1){
        dibujarCabeza();
    }
    else if(numero==2){

        dibujarCabeza();
        dibujarCuerpo();

    }
    else if(numero==3){

        dibujarCabeza();
        dibujarCuerpo();
        dibujarManos();

    }
    else if(numero==4){

        dibujarCabeza();
        dibujarCuerpo();
        dibujarManos();
        dibujarPies();

    }
    else if(numero==5){

        dibujarCabeza();
        dibujarCuerpo();
        dibujarManos();
        dibujarPies();
        dibujarHorca();

    }

    else if(numero==6){

        dibujarCabeza();
        dibujarCuerpo();
        dibujarManos();
        dibujarPies();
        dibujarHorca();
        dibujarTechoHorca();

    }

    
    else if(numero==7){

        dibujarCabeza();
        dibujarCuerpo();
        dibujarManos();
        dibujarPies();
        dibujarHorca();
        dibujarTechoHorca();
        dibujarSoga();

    }



}



export {errores};