var piedra = "piedra";
var papel = "papel";
var tijeras = "tijeras";

var resultado = function(usuario, cpu){
  switch (piedra) {
    case (usuario === piedra && cpu === tijeras):
      resultado = "Ganó el usuario";
      break;
    case (usuario === piedra && cpu === papel):
      resultado = "Ganó el CPU"
      break;
    case (usuario === piedra && cpu === piedra):
      resultado = "Es un empate";
      break;
    default:
      console.log ("No se jugó");
  };
  switch (papel){
    case (usuario === papel && cpu === piedra):
      resultado = "Ganó el usuario";
      break;
    case (usuario === papal && cpu === tijeras):
      resultado = "Ganó el CPU";
      break;
    case (usuario === papel && cpu === papel):
      resultado = "Es un empate";
      break;
    default:
      console.log ("Esto no da para más");
  }
  switch (tijeras) {
    case (usuario === tijeras && cpu === papel):
      resultado = "Ganó el usuario";
      break;
    case (usuario === tijeras && cpu === piedra):
      resultado = "Ganó el CPU";
      break;
    case (usuario === tijeras && cpu === tijeras):
      resultado = "Es un empate";
      break;
      default:
        console.log ("Esto se fue al choto");
  }
}

resultado (piedra, papel); //Ingresar en el primer valor la elección del usuario y en el segundo la elección del CPU

//Resolver bien el ejercicio