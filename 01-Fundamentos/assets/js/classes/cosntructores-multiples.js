//multiples
class Persona {
  static porObjecto({ nombre, apellido, pais }) {
    return new Persona(nombre, apellido, pais);
  }

  constructor(nombre, apellido, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
  }

  getInfo() {
    console.log(`Info ${this.nombre}, ${this.apellido}, ${this.pais}`);
  }
}

const nombre1 = "renato",
  apellido1 = "Flores",
  pais1 = "Arequipa";

const de = {
  nombre: "deni",
  apellido: "idi",
  pais: "peru",
};

const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.porObjecto(de);

persona1.getInfo();
persona2.getInfo();
