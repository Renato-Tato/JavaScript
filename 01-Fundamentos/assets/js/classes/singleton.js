//es una instancia unica de mi clase

class Singleton {
  static instancia;
  nombre = "";

  constructor(nombre = "") {
    if (!!Singleton.instancia) {
      return Singleton.instancia;
    }
    Singleton.instancia = this;
    this.nombre = nombre;
  }
}

const instancia1 = new Singleton("Ironman");
const instancia2 = new Singleton("Spiderman");
const instancia3 = new Singleton("Black Panther");

console.log(`Nombre en la instancia es :${instancia1.nombre}`);
console.log(`Nombre en la instancia es :${instancia2.nombre}`);
console.log(`Nombre en la instancia es :${instancia3.nombre}`);
