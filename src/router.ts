import { initWelcome } from "./pages/page-welcome";
import { initRules } from "./pages/reglas";
import { initPlay } from "./pages/play";

import { initResult } from "./pages/result";

const routes = [
  {
    path: /\/welcome/,
    component: initWelcome,
  },
  {
    path: /\/reglas/,
    component: initRules,
  },
  {
    path: /\/play/,
    component: initPlay,
  },
  {
    path: /\/result/,
    component: initResult,
  },
];

const BASE_PATH = "/desafio-integrador-mod-5";

function isGithubPages() {
  return location.host.includes("github.io");
}

export function initRouter(container: any) {
  function goTo(path) {
    ////primera solucion al problema de las rutas en github pages
    const completePath = isGithubPages() ? BASE_PATH + path : path;
    history.pushState({}, "", completePath);
    handleRoute(completePath);
  }
  function handleRoute(route) {
    // console.log("El router recibio una nueva ruta y esta es:::  ", route);
    ///// ////segunda solucion al problema de las rutas en github pages
    const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
    ////for q recorre rutas y compara las regular exprecions
    for (const r of routes) {
      if (r.path.test(newRoute)) {
        const el = r.component({ goTo: goTo });

        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }
  /// si en la ruta hay una sola "/" goto me lleva a Welcome
  if (location.host.includes("github.io")) {
    goTo("/welcome");
  } else if (location.pathname == "/") {
    goTo("/welcome");
  } else {
    //handleRoute inicializa y  pasa el path asi misma
    handleRoute(location.pathname);
  }
  /// window.onpopstate   se usa para que al cambiar la ruta desde la flecha atras ,adelante.........este este escuchando el estado para asi llamar al handleRoute
  window.onpopstate = function () {
    handleRoute(location.pathname);
  };
}
