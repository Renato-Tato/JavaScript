/**
 *
 * @param {HTMLDivElement} element
 */
export const generatorFunctionsComponent = (element) => {
  // console.log("generatorFunctionsComponent");
  // const myGenerator = myFirstGeneratorFunction();
  // console.log(myGenerator.next());
  // console.log(myGenerator.next());
  // console.log(myGenerator.next());
  // console.log(myGenerator.next());
  // console.log(myGenerator.next());

  const genId = idGenerator();

  const button = document.createElement("button");
  button.innerText = "Click me";
  element.append(button);

  const renderButton = () => {
    const { value } = genId.next();
    button.innerText = `Click ${value}`;
  };
  button.addEventListener("click", (event) => renderButton(event));
};

function* idGenerator() {
  let currentId = 0;
  while (true) {
    yield ++currentId;
  }
}

//yield es para indicar que tipo de dato es, y cuando hay un return terminado todo
function* myFirstGeneratorFunction() {
  yield `Primer valor`;
  yield `Segundo valor`;
  yield `Tercer valor`;
  yield `Cuarto valor`;

  return `Ya no hay valores`;
}
