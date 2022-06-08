

function palabraAleatoria(palabras) {

  const numeroPalabras = palabras.length; 

  const numeroAleatorio = (Math.random()*numeroPalabras)

  const conversion = Math.floor(numeroAleatorio);
  
  
  console.log(conversion);
  return palabras[conversion];
  
}

export { palabraAleatoria };
