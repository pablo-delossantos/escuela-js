var nombre = 'Pablo', apellido = 'de los Santos'

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)
var cantidadDeLetrasDelNombre = nombre.length //=> Atributo length

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}` //Podemos escribir código dentro de las llaves

//Acceder a un sub string (un string dentro de un string)
var str = nombre.substr(1, 2) //El primer número indica la posición, el segundo indica la cantidad de caracteres

var ultimaLetraDelNombre = nombre.charAt(nombre.length -1)