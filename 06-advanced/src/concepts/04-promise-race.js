/**
 *
 * @param {HTMLDivElement} element
 */
export const promiseRaceComponent = (element) => {
  element.innerHTML = "loading...";

  const renderValue = (value) => {
    element.innerHTML = value;
  };

  Promise.race([slowPromise(), mediumPromise(), fastPromise()]).then((value) =>
    renderValue(value),
  );
};

const slowPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Slow Promise");
    }, 9000);
  });
};

const mediumPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Medium Promise");
    }, 800);
  });
};

const fastPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Fast Promise");
    }, 10000);
  });
};
