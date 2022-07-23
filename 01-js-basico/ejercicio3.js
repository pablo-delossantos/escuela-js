//Escribir una funcion constructora y hacer un loop para generar una lista de 30 autos que se vayan contruyendo sola.

//Template
var autos = []

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

for (var i = 0; i < 30; i++ ) {
  var autoNuevo = new auto ("Marca", "Modelo", "annio"   )
  var agregarAuto = autos.push(autoNuevo);
}
console.log(autos);