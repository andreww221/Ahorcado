

const txtArea = document.querySelector(".main_txtArea");

const botonPalabra = document.querySelector(".footer_botonGuardar");


const formulario  = document.querySelector(".formulario");




formulario.addEventListener("submit",(e)=>{

e.preventDefault();

})



botonPalabra.addEventListener("click",()=>{

var palabra = txtArea.value;

localStorage.setItem("palabra",palabra);


location.href("../pages/juego.html");


});