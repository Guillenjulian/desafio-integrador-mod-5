import { state } from "../../state";

export function initResult(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");

  // creo el div con los contenido de la pagina

  div.innerHTML = `
  
  <div class="contenedor">
  <my-star></my-star>
  <my-button  class="boton"    value="Volver a jugar"></my-button>
  <my-button  class="boton1"   value="Salir"></my-button>
  </div>
  `;

  style.innerHTML = `
  .contenedor {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }
  @media (max-width: 768px){
    .contenedor{
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
  `;

  function handleClick() {
    const boton = div.querySelector(".boton");
    const boton1 = div.querySelector(".boton1");
    // console.log(boton1);

    boton?.addEventListener("click", () => {
      params.goTo("/play");
    });
    boton1?.addEventListener("click", () => {
      params.goTo("/reglas");
    });
  }
  // const startEl = div?.querySelector("my-star");

  div.appendChild(style);
  handleClick();
  return div;
}
