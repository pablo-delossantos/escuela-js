var pablo = {
    nombre: 'Pablo',
    apellido: 'de los Santos',
    edad: 42,
    peso: 75
}

console.log(`Al inicio del año ${pablo.nombre} pesa ${pablo.peso} kg.`)

// function aumentarDepeso (persona) {
//     return persona.peso += 0.2
// }

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANNO = 365

const aumentarDepeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANNO; i++) {
    var random = Math.random()

    if (random < 0.25) {
        aumentarDepeso(pablo)
    } else if (random < 0.5) {
        adelgazar(pablo)
    }
}
//Else if: si no se cumple esta pero se cumple esta otra.

console.log(`Al final del año ${pablo.nombre} pesa ${pablo.peso.toFixed(1)} kg.`)