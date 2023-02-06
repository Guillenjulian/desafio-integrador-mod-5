import { state } from "../../state";

export function initResult(params) {
  const currentState = state.getState();
  console.log(currentState);

  const playerScore = currentState.playHistory.player;
  console.log(playerScore);

  const cpuScore = currentState.playHistory.cpu;
  console.log(cpuScore);

  const result = currentState.playHistory.result;
  console.log(result);

  const div = document.createElement("div");
  const style = document.createElement("style");
  // creo el div con los contenido de la pagina
  div.className = "contenedor";
  div.innerHTML = `
  <div class="contenedor">
  <h1>Resultado</h1>
  <h2>${result}</h2>
  </div>`;
  style.innerHTML = ``;
  div.appendChild(style);

  return div;
}
