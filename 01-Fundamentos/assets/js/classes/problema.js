const re = {
  nombre: "Renato",
  edad: 30,
  imprimir() {
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
  },
};

const de = {
  nombre: "Denilzon",
  edad: 29,
  imprimir() {
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
  },
};

const ja = {
  nombre: "James",
  edad: 28,
  imprimir() {
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
  },
};

function Persona(nombre, edad) {
  console.log("se ejecuto esta linea");
  this.nombre = nombre;
  this.edad = edad;
  this.imprimir = function () {
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
  };
}
const maria = new Persona("Maria", 22);
console.log(maria);
console.log(maria.imprimir());
