const regresaTrue = () => {
  console.log("Regresa true");
  return true;
};

const regresaFalse = () => {
  console.log("Regresa false");
  return false;
};

console.warn("not o la negacion");
console.log(true);
console.log(!false);
console.log(!true);

console.warn("and"); // true si todos los vcalores son verdadero
console.log(true && true); // true
console.log(true && !false); // true
// si en el and el primero es falso todo es falso

console.warn("or"); // true

// solo uno tiene que ser verdadero para que salga verdadero
console.log(true || false); //true

//
console.warn("Asginaciones");
