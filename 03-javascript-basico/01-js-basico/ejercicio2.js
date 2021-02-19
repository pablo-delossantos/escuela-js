/* Piedra: 0, papel: 1 o tijera: 2
 parámetros: p = persona, pc = computadora */

function jugar(p, pc) {
  switch (true) {
      case p === pc:
          console.log("Empate");
          break;
      case p === 0 && pc !== 1:
          console.log("Ganas");
          break;
      case p === 1 && pc !== 2:
          console.log("Ganas");
          break;
      case p === 2 && pc !== 0:
          console.log("Ganas");
          break;
      default:
          console.log("Pierdes");
          break;
  }
}