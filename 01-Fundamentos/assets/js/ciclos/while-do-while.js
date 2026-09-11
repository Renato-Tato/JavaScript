//ciclos
const carros = ["toyota", "mazda", "nissan", "mercedes"];

let i = 0;
// while (i < carros.length) {
//   // tiene que ser verdadero para que se ejecute
//   console.log(carros[i]);
//   //i=i+1
//   i++;
// }

while (carros[i]) {
  if (i === 0) {
    i++;
    continue;
  }
  console.log(carros[i]);
  i++;
}

console.warn("do while");
let j = 0;
do {
  console.log(carros[j]);
  j++;
} while (carros[j]);
