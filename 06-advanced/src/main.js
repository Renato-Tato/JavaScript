import "./style.css";
import javascriptLogo from "./assets/javascript.svg";
import viteLogo from "./assets/vite.svg";
import { environmentsComponent } from "./concepts/01-environments.js";
import { callbackComponent } from "./concepts/02-callbacks.js";
import { promiseComponent } from "./concepts/03-promises.js";
import { promiseRaceComponent } from "./concepts/04-promise-race.js";
import { asyncComponent } from "./concepts/05-async.js";
import { asynAwaitComponent } from "./concepts/06-async-await.js";
import { asyncAwait2Component } from "./concepts/07-async-await.js";
import { forAwaitComponent } from "./concepts/08-for-await.js";
import { generatorFunctionsComponent } from "./concepts/09-generator.js";
import { generatorAsyncComponent } from "./concepts/10-generator-async.js";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
    
    </div>
  </div>
`;

const element = document.querySelector(".card ");

// environmentsComponent(element);
//callbackComponent(element);
//promiseComponent(element);
//promiseRaceComponent(element);
//asyncComponent(element);
//asynAwaitComponent(element);
//asyncAwait2Component(element);
//generatorFunctionsComponent(element);
generatorAsyncComponent(element);
