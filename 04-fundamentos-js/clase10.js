var pablo = {
    nombre: 'Pablo',
    apellido: 'de los Santos',
    edad: 42,
    disenador: true, //Booleano
    cocinero: false,
    dj: false,
    cantante: false,
    guitarrista: false,
    drone: false
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

imprimirProfesiones(pablo)