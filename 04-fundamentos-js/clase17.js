 var sacha = {
     nombre: 'Sacha',
     apellido: 'Lifszyc',
     altura: 1.72 
 }
 
 var alan = {
     nombre: 'Alan',
     apellido: 'Pérez',
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

 var personas = [sacha, alan, martin, dario, vicky, paula, pablo] //Array

//Vamos a recorrer para obtener la altura de cada persona

for (var i = 0; i < personas.length; i++) {
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura.toFixed(2)} mts.`)
 }