import { state } from "../../state";

export function initResult(params) {
  const currentState = state.getState();
  // console.log(currentState);

  const playerScore = currentState.playHistory.player;
  //console.log(playerScore);

  const cpuScore = currentState.playHistory.cpu;
  //console.log(cpuScore);

  const result = currentState.playHistory.result;
  console.log(result);

  const div = document.createElement("div");
  const style = document.createElement("style");
  // creo el div con los contenido de la pagina

  div.innerHTML = `
  <div class="contenedor">
  
  
  <my-star ,></my-star>

  <my-button  class="boton"    value="Volver a jugar" ></my-button>
  <my-button  class="boton1"  " value="Salir" ></my-button>

  
  </div>
  `;
  style.innerHTML = `
 .container {
  
}
.contenedor {
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 30px;

}

 
 

  `;

  const startEl = div.querySelector("my-star");

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
  function handel() {
    const startEl = div.querySelector("my-star");
    const starCmon: any = startEl?.querySelector(".star");

    if (result === "Ganaste") {
      starCmon.style.backgroundColor = "green";
    } else if (result === "Perdiste") {
      starCmon.style.backgroundColor = "red";
    } else if (result === "Empate") {
      starCmon.style.backgroundColor = "yellow";
    }
  }

  div.appendChild(style);
  handleClick();
  handel();

  return div;
}
