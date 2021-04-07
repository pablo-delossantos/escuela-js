function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}, mido ${this.altura} mts.`)
}

//new esta reservada para crear nuevos objetos
var sacha = new Persona('Sacha', 'Lifszyc', '1.70') 
var pablo = new Persona('Pablo', 'de los Santos', '1.75')
var myrna = new Persona('Myrna', 'Cappiello', '1.65')