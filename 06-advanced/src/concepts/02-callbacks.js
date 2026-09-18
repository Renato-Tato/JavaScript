import { heroes } from "../data/heroes";
/**
 *
 * @param {HTMLDivElement} element
 */
export const callbackComponent = (element) => {
  const idSuperHeroe1 = "5d86371f2343e37870b91ef1";
  const idSuperHeroe2 = "5d86371f25a058e5b1c8a65e";

  findHero(idSuperHeroe1, (error, elHeroe1) => {
    // element.innerHTML = elHeroe?.name || "no hay heroe";
    if (error) {
      element.innerHTML = error;
      return;
    }
    findHero(idSuperHeroe2, (error, elHeroe2) => {
      if (error) {
        element.innerHTML = error;
        return;
      }
      element.innerHTML = `${elHeroe1.name} / ${elHeroe2.name}`;
    });
  });
};

/**
 *
 * @param {String} id
 * @param {(error:String|Null, hero:Object) => void} callback
 */
const findHero = (id, callback) => {
  const hero = heroes.find((hero) => hero.id === id);
  if (!hero) {
    callback(`Hero with id ${id} not found`);
    return;
  }
  callback(null, hero);
};
