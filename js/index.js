import { crearLineass } from "../js/crearLineas.js";
import { palabraAleatoria } from "../js/palabraAleatoria.js";
import { errores } from "./detectarErrores.js";
import { dibujarCabeza ,dibujarCuerpo ,dibujarManos,dibujarPies, dibujarHorca,dibujarTechoHorca, dibujarSoga  } from "./dibujar.js";




/* ELEMENTOS PARA UTILIZAR  */

var frutas = ["fresa", "papaya", "mango", "manzana"];
const frutaAleatoria = palabraAleatoria(frutas);
const inputLetra = document.querySelector("[data-letra]");
const botonLetra = document.querySelector("[data-letraBoton]");
var letraPresionada = "";
var numeroDeErrores = 0;




console.log(frutaAleatoria);



/* FUNCION QUE INICIA EL JUEGO  */
crearLineass(frutaAleatoria);




botonLetra.addEventListener("click", () => {

  

  letraPresionada = inputLetra.value;


  /*EN EL ARRAY POSICIONES CAPTURO EN QUE POSICIONES ESTA LA LETRA CAPTURADA   */

  var posiciones = [];

  for (var i = 0; i < frutaAleatoria.length; i++) {
    if (frutaAleatoria[i] == letraPresionada) {
      posiciones.push(i);

  }

  }



  /*EN EL CASO QUE LA LETRA INGRESADA NO SEA LA CONTENIDA EN LA PALABRA*/

  if(!frutaAleatoria.includes(letraPresionada)){

    numeroDeErrores=numeroDeErrores+1;
    errores(numeroDeErrores);
    inputLetra.value = "";
    console.log("los errores son"+numeroDeErrores);

  }else{

  /* EN EL CASO QUE LA LETRA INGRESADA SEA LA CONTENIDA EN ARRAY LA DIBUJAMOS  */  

    const lineas = document.querySelectorAll(".raya");

    lineas.forEach((v, i, a) => {
  
      posiciones.forEach((v1, i1, a1) => {
  
        if(v1==i){
          v.value=letraPresionada;
  
        }
  
      });
  
  
    });
  
    inputLetra.value = "";


    
  }






 




});
