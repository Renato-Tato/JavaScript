const elMayor = (a, b) => (a > b ? a : b);

const tienesMenbresia = (miembro) => (miembro ? "2 dolares" : "10 dolares");

console.log(elMayor(20, 15));
console.log(tienesMenbresia(false));

const amigo = false;
const amigosArr = [
  "Peter",
  "Tony",
  "Dr. Strange",
  amigo ? "thor" : "loki",
  elMayor(10, 15),
];
console.log(amigosArr);

const nota = 82.5;
const grado =
  nota >= 95
    ? "A+"
    : nota >= 90
      ? "A"
      : nota >= 85
        ? "B+"
        : nota >= 80
          ? "B"
          : nota >= 70
            ? "C"
            : "F";

console.log({ nota, grado });
