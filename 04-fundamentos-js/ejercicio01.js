var pablo = {
    nombre: 'Pablo',
    apellido: 'de los Santos',
    edad: 42
}

var juan = {
    nombre: 'Juan Manuel',
    apellido: 'Villulla',
    edad: 38
}

function imprimirNombreYEdad({nombre, edad}) {
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)
}

imprimirNombreYEdad(pablo)
imprimirNombreYEdad(juan)