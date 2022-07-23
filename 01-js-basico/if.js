// Condicionales
// Vamos a generar una condición para validar

var edad = 18;

if (edad === 18) {
  console.log("Puedes votar, será tu primera votación");
} else if(edad > 22) {
  console.log("Pueder votar de nuevo");
} else if(edad > 26) {
  console.log("Pueder por tercera vez");
} else if(edad > 30) {
  console.log("Pueder cuarta vez");
} else if(edad > 34) {
  console.log("Pueder quinta vez");
} else {
  console.log("Aun no puedes votar")
}

//Se pueden ocupar más else if para validar las veces que necestitemos

//Operador ternario
condition ? true : false;

var numero = 1;

var resultado = numero === 1 ? "Sí soy un uno" : "No, no soy uno";