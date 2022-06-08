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


    /*MENSAJE CUANDO TERMINA EL JUEGO */
    if(numeroDeErrores==7){

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Perdiste :(',
        showDenyButton: true,
        confirmButtonColor: '#178207',
        denyButtonColor: '#FF0317',
        confirmButtonText: '<a  href="../pages/juego.html">Jugar de nuevo</a>',
        denyButtonText: `<a href="../index.html">Volver al inicio</a>`,
      
      })
    
     
    }
   

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

 
  /* REVISAR SI GANO */

  const lineas1 = document.querySelectorAll(".raya");

  var palabraEnProceso = "";

  
  lineas1.forEach((e,i,a)=>{

     palabraEnProceso=palabraEnProceso+e.value;

     console.log("proc : "+palabraEnProceso);

     if(palabraEnProceso==frutaAleatoria){

      Swal.fire({
        title: '🎊🥳🥳!!!GANASTE 🥳🥳🎊',
        showDenyButton: true,
        confirmButtonColor: '#178207',
        denyButtonColor: '#FF0317',
        confirmButtonText: '<a  href="../pages/juego.html">Jugar de nuevo</a>',
        denyButtonText: `<a href="../index.html">Volver al inicio</a>`,
        width: 600,
        padding: '3em',
        color: '#111111',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://sweetalert2.github.io/images/nyan-cat.gif")
          left top
          no-repeat
        `
      })

     }

    

  });

  
  


 




});





