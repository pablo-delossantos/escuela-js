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

function imprimirNombreEnMayusculas(persona) {
    //var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(pablo)
imprimirNombreEnMayusculas(juan)

function cumpleanos(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}

