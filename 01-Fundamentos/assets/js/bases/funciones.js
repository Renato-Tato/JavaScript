//funciones

function saludar(nombre) {
  console.log(arguments);
  console.log(`Hola ${nombre}`);
}

const saludar2 = function (nombre) {
  console.log(`Saludando ${nombre}`);
};

const saludarFlecha = () => {
  console.log("saludando desde flecha");
};

const saludarFlecha2 = (nombre) => {
  console.log(`saludando desde flecha ${nombre}`);
};

// saludar("Renato", 40, true, "Peruano");
// saludar2("Denilzon");
// saludarFlecha();
// saludarFlecha2("James");

function sumar(a, b) {
  return a + b;
}

const sumar2 = (a, b) => a + b;

function getAleatorio() {
  return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());
