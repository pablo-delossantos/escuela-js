//Método filter

var articulos = [
    { nombre: "Bici", precio: 30000 },
    { nombre: "TV", precio: 25000},
    { nombre: "Libro", precio: 900},
    { nombre: "Celular", precio: 45000},
    { nombre: "Techado", precio: 2000},
    { nombre: "Auriculares", precio: 2500},
]

//Filtrar
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.precio <= 2000
});

articulosFiltrados

//Método Map
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});
nombreArticulos
//Trae los nombres en el array

