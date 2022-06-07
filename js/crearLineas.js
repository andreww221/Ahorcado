const contenedorLineas = document.querySelector(".letras");

function crearLineass(palabra) {
  for (var i = 0; i < palabra.length; i++) {
    const linea = document.createElement("input");
    linea.classList.add("raya");


    contenedorLineas.appendChild(linea);
  }
}

export { crearLineass };
