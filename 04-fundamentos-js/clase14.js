var pablo = {
    nombre: 'Pablo',
    apellido: 'de los Santos',
    edad: 42,
    peso: 75
}

console.log(`Al inicio del año ${pablo.nombre} pesa ${pablo.peso} kg.`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() > 0.4

const META = pablo.peso - 3
var dias = 0

while (pablo.peso > META) {
    if (comeMucho()) {
        aumentarDePeso(pablo)
    }
    if (realizaDeporte()) {
        adelgazar(pablo)
    }
    dias += 1
}

console.log(`Pasaron ${dias} dias hasta que ${pablo.nombre} adelgazó 3 kg`)
