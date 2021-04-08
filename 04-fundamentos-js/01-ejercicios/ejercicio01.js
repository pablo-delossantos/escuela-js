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

function imprimirNombreYEdad(persona){
    var {nombre, edad} = persona
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`)
}

imprimirNombreYEdad(pablo)
imprimirNombreYEdad(myrna)