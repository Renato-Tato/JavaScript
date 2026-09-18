import { heroes } from "../data/heroes.js";

/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncComponent = (element) => {
  const id1 = "5d86371fd55e2e2a30fe1ccb";
  console.log("incio del componente");
  findHero(id1)
    .then(console.log)
    .catch((error) => {
      element.innerHTML = ` ${error}`;
    });
  console.log("fin del componente");
};

/**
 *
 * @param {String} id
 * @returns
 */

const findHero = async (id) => {
  const hero = heroes.find((hero) => hero.id === id);
  if (!hero) throw `hero with id ${id} not found`;
  return hero?.name;
};
