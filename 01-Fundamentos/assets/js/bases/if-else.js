//estructura de control

let a = 15;
if (a > 10) {
  console.log("a es mayor a 10");
} else {
  console.log("a es menor a 10");
}
//console.log("fin de programa");

const hoy = new Date(); // {}
let dia = hoy.getDay(); // 0:Domingo, 1:Lunes, 2:Martes,...
console.log({ dia });

if (dia === 0) {
  console.log("es domingo");
} else {
  if (dia === 1) {
    console.log("es lunes");
  } else {
    console.log("ni es lunes ni domingo");
  }
}

dia = 3;
let diaLetras = [
  "domingo",
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
];
console.log(diaLetras[dia]);
