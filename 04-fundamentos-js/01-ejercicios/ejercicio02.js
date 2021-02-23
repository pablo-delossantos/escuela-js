var pablo = {
    nombre: 'Pablo',
    apellido: 'de los Santos',
    edad: 42,
    disenador: false,
    cocinero: true,
    dj: false,
    cantante: false,
    guitarrista: false,
    drone: false
}

function imprimirSiEsMayorDeEdad(persona) {
    console.log(`${persona.nombre}`)

    if(persona.edad >= 18) {
        console.log('es mayor de edad')
    } else {
        console.log('es menor de edad')
    }
}

imprimirSiEsMayorDeEdad(pablo)