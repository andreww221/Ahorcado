import { crearLineass } from "../js/crearLineas.js";
import { palabraAleatoria } from "../js/palabraAleatoria.js";

var frutas = ["fresa", "papaya", "mango", "manzana"];

const frutaAleatoria = palabraAleatoria(frutas);

console.log(frutaAleatoria);

const inputLetra = document.querySelector("[data-letra]");

const botonLetra = document.querySelector("[data-letraBoton]");

var letraPresionada = "";

function iniciarJuego() {
  crearLineass(frutaAleatoria);
}

iniciarJuego();

botonLetra.addEventListener("click", () => {
  letraPresionada = inputLetra.value;

  console.log(letraPresionada);

  var posiciones = [];

  for (var i = 0; i < frutaAleatoria.length; i++) {
    if (frutaAleatoria[i] == letraPresionada) {
      posiciones.push(i);
    }
  }




  const lineas = document.querySelectorAll(".raya");

  lineas.forEach((v, i, a) => {

    posiciones.forEach((v1, i1, a1) => {

      if(v1==i){

        v.value=letraPresionada;


      }

    });


  });

  console.log(lineas);
});
