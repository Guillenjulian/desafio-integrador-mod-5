export function initTie(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");
  div.innerHTML = `
  <my-button class = "boton" value ="Empezar"></my-button>
  
  `;
  style.innerHTML = ``;
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
