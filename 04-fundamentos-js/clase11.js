var pablo = {
    nombre: 'Pablo',
    apellido: 'de los Santos',
    edad: 42,
    disenador: true,
    cocinero: true,
    dj: false,
    cantante: false,
    guitarrista: false,
    drone: false
}

var juan = {
    nombre: 'Juan',
    apellido: 'Gomez',
    edad: 13
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)

    if (persona.disenador) {
        console.log('Diseñador') //Solo se tiene que hacer si es true
    } else {
        console.log('No es diseñador')
    }

    if (persona.cocinero) {
        console.log('Cocinero')
    }

    if (persona.dj) {
        console.log('Dj')
    }

    if (persona.cantante) {
        console.log('Cantante')
    }

    if (persona.guitarrista) {
        console.log('Guitarrista')
    }

    if (persona.drone) {
        console.log('Piloto de drone')
    }
}

const MAYORIA_DE_EDAD = 18 //Para indicar que usamos una constante La usamos para ser mas claros y evitar el 'magic number'

function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD
} //Si se invoca, devuelvo true o false

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}