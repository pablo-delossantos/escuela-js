var pablo = {
    nombre: 'Pablo',
    apellido: 'de los Santos',
    edad: 42,
    ingeniero: false,
    cocinero: false,
    cantante: false,
    dj: false,
    disenador: true,
    boxeador: true
}

var juan = {
    nombre: 'Juan',
    apellido: 'Gómez',
    edad: 16
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`)
    
    if (persona.ingeniero)  {
        console.log('Ingeniero')
    } else {
        console.log('No es Ingeniero')
    }
    
    if (persona.cocinero)  {
        console.log('Cocinero')
    } else {
        console.log('No es Cocinero')
    }
    
    if (persona.cantante)  {
        console.log('Cantante')
    } else {
        console.log('No es Cantante')
    }
    
    if (persona.dj)  {
        console.log('DJ')
    } else {
        console.log('No es DJ')
    }
    
    if (persona.disenador)  {
        console.log('Diseñador')
    } else {
        console.log('No es Diseñador')
    }
    
    if (persona.boxeador)  {
        console.log('Boxeador')
    } else {
        console.log('No es Boxeador')
    }
}

const MAYORIA_DE_EDAD = 18

//Le asignamos una función a una variable. Se transforma en una función anónima. Otra forma de escribir esto es con un arrow function.
// const esMayorDeEdad = function (persona){
//     return persona.edad >= MAYORIA_DE_EDAD
// }

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD
//Este tipo de nomenclatura esta de moda

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

function permitirAcceso(persona) {
    if (!esMayorDeEdad(persona)) {
        console.log('Acceso denegado')
    }
}