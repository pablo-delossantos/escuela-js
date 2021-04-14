function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}, mido ${this.altura} mts.`)
}

Persona.prototype.soyAlto = function () {
    return this.altura > 1.8
}

var sacha = new Persona('Sacha', 'Lifszyc', '1.85') 
var pablo = new Persona('Pablo', 'de los Santos', '1.70')
var myrna = new Persona('Myrna', 'Cappiello', '1.65')

//this es window, o sea el objeto global dentro del navegador. Es uno de los errores mas comunes en JavaScript. This no es lo que espramos que sea si usamos arrow function. Es decir, cambia quien es this dentro de la función