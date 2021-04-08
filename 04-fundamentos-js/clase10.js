var pablo = {
    nombre: 'Pablo',
    apellido: 'de los Santos',
    edad: 42,
    ingeniero: false,
    cocinero: false,
    cantante: false,
    dj: false,
    disenador: true,
    boxeador: true,
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
    }
    
    if (persona.cantante)  {
        console.log('Cantante')
    }
    
    if (persona.dj)  {
        console.log('DJ')
    }
    
    if (persona.disenador)  {
        console.log('Diseñador')
    }
    
    if (persona.boxeador)  {
        console.log('Boxeador')
    }
}

imprimirProfesiones(pablo)