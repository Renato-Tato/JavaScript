class Rectangulo {
  #base;
  #altura;

  constructor(base = 0, altura = 0) {
    this.#base = base;
    this.#altura = altura;
  }

  #calcularArea() {
    return this.#base * this.#altura;
  }

  mostrarArea() {
    console.log(`El area es: ${this.#calcularArea()}`);
  }
}

const rectangulo = new Rectangulo(10, 15);

rectangulo.mostrarArea();
