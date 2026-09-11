//ciclo for mas usados

const heroes = ["batman", "mujer maravilla", "superman", "aquaman"];

console.warn("for tradicional");
for (let index = 0; index < heroes.length; index++) {
  const valor = heroes[index];
  console.log(valor);
}

console.warn("for in"); // extrae la posicion del arreglo
for (const i_heroe in heroes) {
  console.log(i_heroe);
}

console.warn("for of"); // extrae el valor del arreglo
for (const heroe of heroes) {
  console.log(heroe);
}
