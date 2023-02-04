export function initRules(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");
  div.innerHTML = `
    <div class="contenedor">
    <my-button class = "boton" value ="Jugar"></my-button>
    <div class = "manos">
    <mano-papel></mano-papel>
    <mano-piedra></mano-piedra>
    <mano-tijera></mano-tijera>
  </div>
    </div>
    `;
  style.innerHTML = `welcomewelcome
    .contenedor{}`;
  div.appendChild(style);
  return div;
}
