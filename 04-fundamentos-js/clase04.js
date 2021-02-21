//Funciones: son pedazos de código reutilzable
var nombre = "Pablo", edad = 42

//Para delimitar el cuerpo de la funcion usamos las llaves
function imprimirEdad(n, e) { 
    console.log(`${n} tiene ${e} años`)
}

imprimirEdad(nombre, edad)
imprimirEdad('Vicky', 28)
imprimirEdad('Eric', 24)
imprimirEdad('Darío', 27)
imprimirEdad(25, 'Carlos')
imprimirEdad('Juan')
//Hay que tener en cuanta al desarrollar que JS es un lenguaje debilmente tipado. Ademas, es un lenguaje interpretado.