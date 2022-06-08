import { crearLineass } from "../js/crearLineas.js";
import { palabraAleatoria } from "../js/palabraAleatoria.js";
import { errores } from "./detectarErrores.js";
import {
  dibujarCabeza,
  dibujarCuerpo,
  dibujarManos,
  dibujarPies,
  dibujarHorca,
  dibujarTechoHorca,
  dibujarSoga,
} from "./dibujar.js";

/*------------------------------------------------------------------------------ */
/*                       ELEMENTOS PARA UTILIZAR                                 */
/*------------------------------------------------------------------------------ */

var frutas = ["FRESA", "PAPAYA", "MANGO", "MANZANA"];

/* ME TRAIGO LA PALABRA PERSONALIZADA ESCRITA POR EL USUARIO*/
if (localStorage.getItem("palabra")) {
  frutas.push(localStorage.getItem("palabra"));
}
const frutaAleatoria = palabraAleatoria(frutas);
const inputLetra = document.querySelector("[data-letra]");
const botonLetra = document.querySelector("[data-letraBoton]");
var contenedorLetrasEquivocadas = document.querySelector(".letraEquivocada");
var letraPresionada = "";
var numeroDeErrores = 0;
var arrayLetrasEquivocadas = [];

console.log(frutaAleatoria)

/*------------------------------------------------------------------------------ */
/*                       FUNCION QUE INICIA EL JUEGO                              */
/*------------------------------------------------------------------------------ */
crearLineass(frutaAleatoria);

/*------------------------------------------------------------------------------ */
/*                      EVENTO PARA CONTROLAR LAS LETRAS INGRESADAS              */
/*------------------------------------------------------------------------------ */

document.addEventListener("keydown",(e)=>{

  const abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   
 if(abecedario.includes(e.key)){
  letraPresionada = e.key;
 }

  /*------------------------------------------------------------------------------ */
  /*               CODIGO QUE BUSCA LAS POSICIONES DE LA LETRA PRESIONADA          */
  /*------------------------------------------------------------------------------ */
  var posiciones = [];
  for (var i = 0; i < frutaAleatoria.length; i++) {
    if (frutaAleatoria[i] == letraPresionada) {
      posiciones.push(i);
    }
  }

  if (!frutaAleatoria.includes(letraPresionada)) {
    /*------------------------------------------------------------------------------ */
    /*               EN CASO QUE LA LETRA PRESIONADA SEA ERRONEA                      */
    /*------------------------------------------------------------------------------ */
    arrayLetrasEquivocadas.push(letraPresionada);

    var ordenado = arrayLetrasEquivocadas.filter((v, i, a) => {
      return arrayLetrasEquivocadas.indexOf(v) == i;
    });

    ordenado.forEach((element) => {
      contenedorLetrasEquivocadas.textContent = [...ordenado];
    });

    numeroDeErrores = numeroDeErrores + 1;
    errores(numeroDeErrores);
    inputLetra.value = "";


    /*------------------------------------------------------------------------------ */
    /*              CODIGO QUE ESTA EN LA ESCUCHA SI EL USUARIO YA PERDIO              */
    /*------------------------------------------------------------------------------ */
    if (numeroDeErrores == 7) {
      Swal.fire({
        title: "!!!PERDISTE 😭😭",
        confirmButtonColor: "#0A3871",
        confirmButtonText: 'OK',
        width: 600,
        padding: "3em",
        color: "#111111",
        background: "#fff url(/images/trees.png)",
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://sweetalert2.github.io/images/nyan-cat.gif")
          left top
          no-repeat
        `,
      });
    }
  } else {
    /*------------------------------------------------------------------------------ */
    /*               EN CASO QUE LA LETRA PRESIONADA SEA CORRECTA                    */
    /*------------------------------------------------------------------------------ */

    const lineas = document.querySelectorAll(".raya");

    lineas.forEach((v, i, a) => {
      posiciones.forEach((v1, i1, a1) => {
        if (v1 == i) {
          v.value = letraPresionada;
        }
      });
    });

    inputLetra.value = "";
  }

  /*------------------------------------------------------------------------------ */
  /*              CODIGO QUE ESTA EN LA ESCUCHA SI EL USUARIO YA GANO              */
  /*------------------------------------------------------------------------------ */

  const lineas1 = document.querySelectorAll(".raya");

  var palabraEnProceso = "";

  lineas1.forEach((e, i, a) => {
    palabraEnProceso = palabraEnProceso + e.value;

    console.log("proc : " + palabraEnProceso);

    if (palabraEnProceso == frutaAleatoria) {
      Swal.fire({
        title: "!!!GANASTE 🥳🥳",
        confirmButtonColor: "#0A3871",
        confirmButtonText: 'OK',
        width: 600,
        padding: "3em",
        color: "#111111",
        background: "#fff url(/images/trees.png)",
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://sweetalert2.github.io/images/nyan-cat.gif")
          left top
          no-repeat
        `,
      });
    }
  });

})

botonLetra.addEventListener("click", () => {


  letraPresionada = inputLetra.value;



  /*------------------------------------------------------------------------------ */
  /*               CODIGO QUE BUSCA LAS POSICIONES DE LA LETRA PRESIONADA          */
  /*------------------------------------------------------------------------------ */
  var posiciones = [];
  for (var i = 0; i < frutaAleatoria.length; i++) {
    if (frutaAleatoria[i] == letraPresionada) {
      posiciones.push(i);
    }
  }

  if (!frutaAleatoria.includes(letraPresionada)) {
    /*------------------------------------------------------------------------------ */
    /*               EN CASO QUE LA LETRA PRESIONADA SEA ERRONEA                      */
    /*------------------------------------------------------------------------------ */
    arrayLetrasEquivocadas.push(letraPresionada);

    var ordenado = arrayLetrasEquivocadas.filter((v, i, a) => {
      return arrayLetrasEquivocadas.indexOf(v) == i;
    });

    ordenado.forEach((element) => {
      contenedorLetrasEquivocadas.textContent = [...ordenado];
    });

    numeroDeErrores = numeroDeErrores + 1;
    errores(numeroDeErrores);
    inputLetra.value = "";


    /*------------------------------------------------------------------------------ */
    /*              CODIGO QUE ESTA EN LA ESCUCHA SI EL USUARIO YA PERDIO              */
    /*------------------------------------------------------------------------------ */
    if (numeroDeErrores == 7) {
      Swal.fire({
        title: "!!!PERDISTE 😭😭",
        confirmButtonColor: "#0A3871",
        confirmButtonText: 'OK',
        width: 600,
        padding: "3em",
        color: "#111111",
        background: "#fff url(/images/trees.png)",
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://sweetalert2.github.io/images/nyan-cat.gif")
          left top
          no-repeat
        `,
      });
    }
  } else {
    /*------------------------------------------------------------------------------ */
    /*               EN CASO QUE LA LETRA PRESIONADA SEA CORRECTA                    */
    /*------------------------------------------------------------------------------ */

    const lineas = document.querySelectorAll(".raya");

    lineas.forEach((v, i, a) => {
      posiciones.forEach((v1, i1, a1) => {
        if (v1 == i) {
          v.value = letraPresionada;
        }
      });
    });

    inputLetra.value = "";
  }

  /*------------------------------------------------------------------------------ */
  /*              CODIGO QUE ESTA EN LA ESCUCHA SI EL USUARIO YA GANO              */
  /*------------------------------------------------------------------------------ */

  const lineas1 = document.querySelectorAll(".raya");

  var palabraEnProceso = "";

  lineas1.forEach((e, i, a) => {
    palabraEnProceso = palabraEnProceso + e.value;

    console.log("proc : " + palabraEnProceso);

    if (palabraEnProceso == frutaAleatoria) {
      Swal.fire({
        title: "!!!GANASTE 🥳🥳",
        confirmButtonColor: "#0A3871",
        confirmButtonText: 'OK',
        width: 600,
        padding: "3em",
        color: "#111111",
        background: "#fff url(/images/trees.png)",
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://sweetalert2.github.io/images/nyan-cat.gif")
          left top
          no-repeat
        `,
      });
    }
  });
});


const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit",(e)=>{

e.preventDefault();

})