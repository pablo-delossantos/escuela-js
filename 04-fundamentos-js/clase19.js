var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72 
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86 
}
var martin = {
    nombre: 'Martín',
    apellido: 'Gómez',
    altura: 1.85 
}
var dario = {
    nombre: 'Darío',
    apellido: 'Juarez',
    altura: 1.71 
}
var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56 
}
var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

var pablo = {
    nombre: 'Pablo',
    apellido: 'de los Santos',
    altura: 1.70
}

var personas = [sacha, alan, martin, dario, vicky, paula, pablo]

const esAlta = ({ altura }) => altura > 1.8

var personasAltas = personas.filter(esAlta)
// var personasAltas = personas.filter(function (persona) {
//     return persona.altura > 1.8
// })

//personas.altura = persona.altura * 100
const pasarAlturaACms = persona => ({
    ...persona,
    apellido: persona.altura * 100
})
//Es un nuevo objeto distinto a la persona del viejo array

var personasCms = personas.map(pasarAlturaACms)

console.log(personasCms)