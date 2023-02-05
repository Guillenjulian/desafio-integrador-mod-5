export function initwin(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");
  div.innerHTML = `
  <div class="contenedor">
  
  <my-button class = "boton" value ="Volver a jugar"></my-button>
  
  </div>
      `;
  style.innerHTML = `
      `;
  function handleClick() {
    const boton = div.querySelector(".boton");
    boton?.addEventListener("click", () => {
      console.log("click");
      params.goTo("/reglas");
    });
  }
  handleClick();

  return div;
}
