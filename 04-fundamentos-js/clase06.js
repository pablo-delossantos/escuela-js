var pablo = {
    nombre: 'Pablo',
    apellido: 'de los Santos',
    edad: 42
}

var dario = {
    nombre: 'Juan Manuel',
    apellido: 'Villulla',
    edad: 38
}

//Las llaves delimitan un 'objeto' que va a tener atributos. Estos son 'claves' (key) y 'valores' (value)

function imprimirNombreEnMayusculas({ nombre }) {
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(pablo)
imprimirNombreEnMayusculas(dario)
//imprimirNombreEnMayusculas({ nombre: 'Pepito' }) Error. Vacío
//imprimirNombreEnMayusculas({ apellido: 'Gomez'}) Error. No tiene atributo nombre