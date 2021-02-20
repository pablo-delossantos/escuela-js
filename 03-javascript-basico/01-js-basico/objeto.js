var objeto = {
    propiedad = valores,
};

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: "2020"
}

miAuto //Para llamar la variable

//Una propiedad que llama una función como valor se llama MÉTODO.

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`)
    }
};

//"this" es una variable que hace referencia al objeto, en esta caso a su padre "miAuto".

miAuto.detalleDelAuto(); //Para llamar el método