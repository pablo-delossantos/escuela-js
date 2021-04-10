function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = () => {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}, mido ${this.altura} mts.`)
}

Persona.prototype.soyAlto = () => this.altura > 1.8

//new esta reservada para crear nuevos objetos. Es el equivalente al contructor en otros lenguajes.
var sacha = new Persona('Sacha', 'Lifszyc', '1.85') 
var pablo = new Persona('Pablo', 'de los Santos', '1.70')
var myrna = new Persona('Myrna', 'Cappiello', '1.65')

//Siempre definir los prototipos arriba
sacha.soyAlto()
pablo.soyAlto()
myrna.soyAlto()



//#######

function Libro(titulo, autor, stock){
    this.titulo = titulo
    this.autor = autor
    this.stock = stock
}

Libro.prototype.cantidadDeLibros = function () {
    console.log(`El libro ${this.titulo} fue escrito por ${this.autor}. Tenemos ${this.stock} ejemplares en stock`)
}

var menotti = new Libro('Menotti / Bilardo. La verdadera historia', 'Néstor López', 20)
var hambre = new Libro('El hambre', 'Martín Caparrós', 17)
var leon = new Libro('A sus plantas rendido un león', 'Osvaldo Soriano', 10)
var frutos = new Libro('Frutos extraños', 'Leila Gerriero', 15)