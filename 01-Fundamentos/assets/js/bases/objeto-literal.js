const personajes = {
  nombre: "Tony Stark",
  codeName: "Iron Man",
  vivo: false,
  edad: 40,
  coord: {
    lat: 34.034,
    lng: -118.7,
  },
  trajes: ["Mark 1", "Mark 5", "Mark 2", "Hulkbuster"],
  direccion: {
    zip: "10880, 90265",
    ubicacion: "Malibu, California",
  },
  "ultima-pelicula": "Infinity War",
};

//let escoger = prompt("Introduzca clave para conocer valor: ");
// console.log(personajes);
// console.log("nombre", personajes.nombre);
// document.write(`${escoger}: `, personajes[escoger]);

console.log("lat", personajes.coord.lng);
console.log("traje:", personajes.trajes[1]);

console.log("numero de trajes: ", personajes.trajes.length);
console.log(
  "numero de trajes: ",
  personajes.trajes[personajes.trajes.length - 1],
);

const x = "vivo";
console.log("vivo", personajes[x]);

console.log("ultima pelicula: ", personajes["ultima-pelicula"]);

// mas detalles

delete personajes.edad;
console.log(personajes);

personajes.casado = true;

const entriesPares = Object.entries(personajes);
console.log(entriesPares);

//esto es para que no se pueda cambiar el objeto literal
Object.freeze(personajes);

personajes.dinero = 112313123213;
personajes.direccion.ubicacion = "New York";
console.log(personajes);

const propiedades = Object.getOwnPropertyNames(personajes);
console.log(propiedades);
const valores = Object.values(personajes);
console.log({ propiedades, valores });
