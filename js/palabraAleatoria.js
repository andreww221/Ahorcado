

function palabraAleatoria(palabras) {

  const numeroPalabras = palabras.length; 

  const numeroAleatorio = (Math.random()*5)

  const conversion = Math.floor(numeroAleatorio);
  
  
  console.log(conversion);
  return palabras[conversion];
  
}

export { palabraAleatoria };
