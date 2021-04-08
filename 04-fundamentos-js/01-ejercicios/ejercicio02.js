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

function imprimirSiEsMayorDeEdad(persona){
    console.log(`${persona.nombre} es: `)

    if (persona.edad >= 18) {
        console.log('mayor de edad')
    } else {
        console.log('menor de edad')
    }
}

imprimirSiEsMayorDeEdad(pablo)