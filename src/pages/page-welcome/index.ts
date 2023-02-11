export function initWelcome(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");
  div.innerHTML = `
  <div class="contenedor">
  <my-text ></my-text>

  <my-button class = "boton" value ="Empezar"></my-button>
  
  
  
  <div class = "manos">
  <mano-papel></mano-papel>
  <mano-piedra></mano-piedra>
  <mano-tijera></mano-tijera>
</div>
  </div>  `;
  style.innerHTML = `
  .contenedor{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 50px;
  
    
  }
  .manos{
    display: flex;
    gap: 50px;
  
  }
  `;

  function handleClick() {
    const boton = div.querySelector(".boton");
    boton?.addEventListener("click", () => {
      // console.log("click");
      params.goTo("/reglas");
    });
  }
  div.appendChild(style);
  handleClick();
  return div;
}
