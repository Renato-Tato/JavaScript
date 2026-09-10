// arreglos parte 2

let juegos = ["zelda", "mario", "metroid", "ben10"];
console.log("largo:", juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log({ primero, ultimo });

juegos.forEach((elemento, indice, arr) => {
  console.log({ elemento, indice, arr });
});

let nuevaLongitud = juegos.push("F-Zero");
console.log({ nuevaLongitud, juegos });

nuevaLongitud = juegos.unshift("Dota 1");
console.log({ nuevaLongitud, juegos });

juegoBorrado = juegos.pop();
console.log({ juegoBorrado, juegos });

let pos = 1;

console.log(juegos);
let juegosBorrados = juegos.splice(pos, 2);
console.log({ juegosBorrados, juegos });

let metroidIndex = juegos.indexOf("metroid");
console.log({ metroidIndex });
