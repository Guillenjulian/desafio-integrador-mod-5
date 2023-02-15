import { state } from "./state";

import { init as initButton } from "./componet/button/index";
import { init as initText } from "./componet/text-init/index";
import { init as initManoPapel } from "./componet/mano-papel/index";
import { init as initManoPiedra } from "./componet/mano-piedra/index";
import { init as initManoTijera } from "./componet/mano-tijera/index";
import { init as initcontador } from "./componet/contador/index";
import { initStar } from "./componet/card-result";
import { initRules } from "./componet/text-rules/index";
import { initResult } from "./componet/text-result";

import { initRouter } from "./router";

function inicializa() {
  initButton();
  initRules();
  initText();
  initcontador();
  initResult();
  initStar();
  initManoPapel();
  initManoPiedra();
  initManoTijera();

  //console.log(root);
}

(function () {
  const root: any = document.querySelector(".root") as HTMLElement;
  // console.log(state);
  // console.log(localStorage);

  state.init();
  inicializa();
  initRouter(root);
  // console.log(localStorage.savedPlay);
})();
