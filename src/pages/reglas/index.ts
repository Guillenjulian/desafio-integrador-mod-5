export function initRules(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");
  div.innerHTML = `
    <div class="contenedor">
    <my-rules></my-rules>
    <my-button class = "boton" value ="Jugar"></my-button>
    <div class = "manos">
    <mano-papel  class = "mano"></mano-papel>
    <mano-piedra class = "mano"></mano-piedra>
    <mano-tijera class = "mano"></mano-tijera>
  </div>
    </div>
    `;
  style.innerHTML = `
    .contenedor{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 50px auto;
      width: 100vh;
      height: 100%;
      gap: 40px;
    

    }
    .manos{
      display: flex;
      justify-content: space-evenly;
      width: 100%;
      margin: 0 auto;

    }
    
    
    `;
  function handleClick() {
    const boton = div.querySelector(".boton");
    boton?.addEventListener("click", () => {
      params.goTo("/play");
    });
  }

  function handel() {
    const mano = div.querySelector(".manos");
    mano?.addEventListener("click", () => {
      console.log(mano, "mano");
    });
  }

  div.appendChild(style);
  handleClick();
  return div;
}
