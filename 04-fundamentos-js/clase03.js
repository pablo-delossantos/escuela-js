var edad = 41

// edad = edad + 1 --> Lo podemos escribir como:
edad += 1

var peso = 75

// peso = peso - 2

peso -= 2

var sandwich = 1

peso += sandwich

var jugarAlFutbol = 3

peso -= jugarAlFutbol

var precioDeVino = 200.3

var total = Math.round(precioDeVino * 100 * 3) / 100
var totalStr = total.toFixed(3)
var total2 = parseFloat(totalStr) //Parse es transformar (de un string a un decimal en este caso)

var pizza = 8
var persona = 2
var cantidadDePorcionesPorPersona = pizza / persona