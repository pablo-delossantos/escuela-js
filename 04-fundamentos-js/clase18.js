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

const esAlta = ({ altura }) => altura > 1.8
const esBaja = ({ altura }) => altura <= 1.8

var personas = [sacha, alan, martin, dario, vicky, paula, pablo]

//Vamos a filtrar a las personas altas
var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)
// var personasAltas = personas.filter(function (persona) {
//     return persona.altura > 1.8
// })

console.log(personasAltas)
console.log(personasBajas)