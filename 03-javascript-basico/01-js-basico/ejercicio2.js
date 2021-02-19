var piedra = "piedra";
var papel = "papel";
var tijeras = "tijeras";

var resultado = function(usuario, cpu){
  switch (resultado) {
    case (usuario === piedra && cpu === tijeras):
      console.log ("El usuario ganó con " + piedra);
      break;
    case (usuario === tijeras && cpu === papel):
      console.log ("El usuario ganó con " + papel);
      break;
    case (usuario === tijeras && cpu === papel):
      console.log ("El usuario ganó con " + tijeras);
      break;
    case (usuario === cpu):
      console.log ("Es un empate");
      break;
    default:
      console.log ("El CPU ganó");
  }
}

resultado (piedra, papel); //Ingresar en el primer valor la elección del usuario y en el segundo la elección del CPU

//Resolver bien el ejercicio