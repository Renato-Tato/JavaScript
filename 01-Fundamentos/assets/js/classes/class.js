//clases en java

class Persona {
  static _conteo = 0;

  static get conteo() {
    return Persona._conteo + " instancias";
  }
  static mensaje() {
    console.log(this.nombre);
    console.log("soy un metodo estatico");
  }

  nombre = "";
  condigo = "";
  frase = "";
  comida = "";

  constructor(
    nombre = "Sin nombre",
    codigo = "Sin codigo",
    frase = "Sin frase",
  ) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
    Persona._conteo++;
  }

  //getter y setter
  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }

  get getComidaFavorita() {
    return `La comida favorita de ${this.nombre} es ${this.comida}`;
  }

  quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad ${this.codigo}`);
  }
  miFrase() {
    this.quienSoy();
    console.log(`${this.codigo} dice: ${this.frase}`);
  }
}

const spiderman = new Persona("Peter Parker", "Spiderman", "Traime galletas");
// const ironman = new Persona("Tony Stark", "Ironman", "Yo soy Ironman");

console.log(spiderman);
// console.log(ironman);

spiderman.miFrase();
// ironman.quienSoy();

spiderman.setComidaFavorita = "lomo saltado";
// console.log(spiderman.getComidaFavorita);
// console.log(spiderman);
// Persona._conteo = 2;
console.log("conteo estatico", Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = "JavaScript";
console.log(Persona.propiedadExterna);
console.log(Persona);
