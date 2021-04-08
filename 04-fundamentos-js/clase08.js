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

function imprimirNombreEnMayusculas(persona) {
    //var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(pablo)
imprimirNombreEnMayusculas(myrna)

function cumpleanos(persona) {
    return {
        ...persona, 
        edad: persona.edad + 1
    }
}