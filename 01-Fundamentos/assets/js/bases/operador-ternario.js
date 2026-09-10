const dia = 1; // 0:domingo, 1: lunes
const horaActual = 9;

let horaApertura;
let mensaje;

// if (dia === 0 || dia === 6) {
// if ([0, 6].includes(dia)) {
//   console.log("fin de semana");
//   horaApertura = 9;
// } else {
//   console.log("dia de la semana");
//   horaApertura = 11;
// }

horaApertura = [0, 6].includes(dia) ? 9 : 11;

mensaje =
  horaActual >= horaApertura
    ? "Esta Abierto"
    : `esta cerrado, hoy abrimos a las ${horaApertura}`;

// if (horaActual >= horaApertura) {
//   mensaje = "Esta Abierto";
// } else {
//   mensaje = `esta cerrado, hoy abrimos a las ${horaApertura}`;
// }

console.log({ horaApertura, mensaje });
