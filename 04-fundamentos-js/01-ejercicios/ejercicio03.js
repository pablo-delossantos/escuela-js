var pablo = {
    nombre: 'Pablo',
    apellido: 'de los Santos',
    edad: 42
}

var juan = {
    nombre: 'Juan',
    apellido: 'Gomez',
    edad: 13
}

const MAYORIA_DE_EDAD = 18

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD

const esMenorDeEdad = (persona) => !esMayorDeEdad(persona)

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

function permitirAcceso(persona) {
    if(esMenorDeEdad(persona)) {
        console.log('ACCESO DENEGADO')
    } 
}