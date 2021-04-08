var pablo = {
    nombre: 'Pablo',
    apellido: 'de los Santos',
    edad: 42
}

var myrna = {
    nombre: 'Myrna',
    apellido: 'Cappiello',
    edad: 38
}

function imprimirNombreEnMayusculas( {nombre} ) {
    //var nombre = persona.nombre.toUpperCase()
    console.log(nombre.toUpperCase())
    //Si no queremos declarar una nueva funcion
}

imprimirNombreEnMayusculas(pablo)
imprimirNombreEnMayusculas(myrna)
//imprimirNombreEnMayusculas( {nombre: 'Juan Manuel'}) Podemos definir un objeto en el parámetro cuando invocamos la función
// imprimirNombreEnMayusculas( ) si esta vació da error
// imprimirNombreEnMayusculas( {apellido: 'Villulla'} ) si le pasamos otro parámetro da error