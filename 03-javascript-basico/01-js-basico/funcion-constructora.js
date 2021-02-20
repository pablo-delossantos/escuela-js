function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
} //Funcion constructora que a ser el template de mis nuevos objetos.

//Construir un objeto nuevo en relación al template. El operado "new" genera una nueva instancia de nuestra función constructora. Una instancia es un objeto que dereiva de otro objeto.
var autoNuevo = new auto("Tesla", "Model 3", 2020);
var autoNuevo2 = new auto("Tesla", "Model X", 2018);
var autoNuevo3 = new auto("Totoya", "Corolla", 2020);