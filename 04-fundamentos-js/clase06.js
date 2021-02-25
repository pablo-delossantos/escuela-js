var pablo = {
    nombre: 'Pablo',
    apellido: 'de los Santos',
    edad: 42
}

var juan = {
    nombre: 'Juan Manuel',
    apellido: 'Villulla',
    edad: 38
}

//Las llaves delimitan un objeto que va a tener atributos. Estos son 'claves' (key) y 'valores' (value)

function imprimirNombreEnMayusculas({ nombre }) { //Deglosar el objeto => ponemos los atributos entre llaves
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(pablo)
imprimirNombreEnMayusculas(juan)
// imprimirNombreEnMayusculas({ nombre: 'Pepito' })
// imprimirNombreEnMayusculas() //No podemos desglosar un objeto si no le pasamos el valor que espera.
// imprimirNombreEnMayusculas({ apellido: 'Gomez'}) //Tambien va a dar error porque espera otro parámetro.