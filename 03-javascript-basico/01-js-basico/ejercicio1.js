var piedra = "piedra";
var papel = "papel";
var tijeras = "tijeras";

var resultado = function(usuario, cpu){
  if (usuario != cpu){
    if (usuario === piedra && cpu === tijeras) {
      console.log ("El usuario ganó con " + piedra);
    } else if (usuario === papel && cpu === piedra) {
      console.log ("El usuario ganó con " + papel);
    } else if (usuario === tijeras && cpu === papel) {
      console.log ("El usuario ganó con " + tijeras);
    } else {
      console.log ("El CPU ganó");
    }
  } else if (usuario === cpu) {
    console.log ("Es un empate")
  }
};

resultado (piedra, papel); //Ingresar en el primer valor la elección del usuario y en el segundo la elección del CPU