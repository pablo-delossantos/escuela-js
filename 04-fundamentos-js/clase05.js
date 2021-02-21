var nombre = 'Pablo'  //Variable global

function imprimirNombreEnMayusculas(nombre) { //Alcance local
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayusculas(nombre)

//Toda variable que no este definida dentro de una funcion va a estar definida dentro del alcance global, y vamos a poder acceder a ella dentro del objeto global window