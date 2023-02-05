import { init as initButton } from "./componet/button/index";
import { init as initText } from "./componet/text-init/index";
import { init as initManoPapel } from "./componet/mano-papel/index";
import { init as initManoPiedra } from "./componet/mano-piedra/index";
import { init as initManoTijera } from "./componet/mano-tijera/index";
import { init as initcontador } from "./componet/contador/index";
import { initRules } from "./componet/text-rules/index";

import { initRouter } from "./router";

(function () {
  initButton();
  initRules();
  initText();
  initcontador();

  initManoPapel();
  initManoPiedra();
  initManoTijera();

  const root: any = document.querySelector(".root") as HTMLElement;
  //console.log(root);
  initRouter(root);
})();
