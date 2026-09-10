// los pro-tips

function crearPersona(nombre, apellido) {
  return { nombre, apellido };
}

const crearPersona2 = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona("Renato", "Huanca");
console.log(persona);

function imprimeArgumento() {
  console.log(arguments);
}

// los puntos son para poder ponerlos dentro de un arreglo
const imprimirArgumentos2 = (edad, ...args) => {
  //console.log({ edad, args });
  return args;
};

imprimeArgumento(10, true, false, [1, 2, 3, 4], "Renato");
const [casado, vivo, nombre, saludo] = imprimirArgumentos2(
  10,
  true,
  false,
  [1, 2, 3, 4],
  "Renato",
);
console.log({ casado, vivo, nombre, saludo });

// esto es una nueva forma de llamar const x = crearPersona('Renato','Huanca') -- console.log(x.nombre)
const { nombre: nuevoNombre } = crearPersona("Renato", "Huanca");
console.log({ nuevoNombre });
const { apellido } = crearPersona("Renato", "Huanca");
console.log({ apellido });

const personaje = {
  nombre: "Tony Stark",
  codeName: "Iron Man",
  vivo: false,
  edad: 40,
  trajes: ["Mark 1", "Mark 5", "Mark 2", "Hulkbuster"],
};

const imprimePropiedades = ({ nombre, codeName, vivo, edad, trajes }) => {
  return { nombre, codeName, vivo, edad, trajes };
};

const propiedades = imprimePropiedades(personaje);
console.log("hola", propiedades);
