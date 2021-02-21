//Método Find

var articulos = [
    { nombre: "Bici", precio: 30000 },
    { nombre: "TV", precio: 25000},
    { nombre: "Libro", precio: 900},
    { nombre: "Celular", precio: 45000},
    { nombre: "Teclado", precio: 2000},
    { nombre: "Auriculares", precio: 2500},
    { nombre: "Notebook", precio: 70000},
]
//Generamos un nuevo Array con el método find
var encuentraArticulo = articulos.find(function(articulo){
	return articulo.nombre === "Notebook"
});

//Mandamos llamar
encuentraArticulo

//_______________
//Método forEach. Va a filtrar el array anterior, sin generar un nuevo array
articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});