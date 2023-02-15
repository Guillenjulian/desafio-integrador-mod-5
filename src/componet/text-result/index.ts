import { state } from "../../state";

export function initResult() {
  class TextResult extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const currentState: any = state.getState();
      // console.log(currentState, "state");

      const playerScore: number = currentState.playHistory.player;
      //const playerResult = playerScore == 0 ? 0 : playerScore;
      // console.log(playerScore, "player");

      const cpuScore: number = currentState.playHistory.cpu;
      // const cpuResult = cpuScore == 0 ? 0 : cpuScore;
      // console.log(typeof cpuScore, "cpu");
      const div = document.createElement("div");

      const style = document.createElement("style");
      div.className = "container-result";

      // creo el div con los contenido de la pagina

      div.innerHTML = `

    
    <p class = "text">  TU :${playerScore}</p>
    <p class = "text"> PC: ${cpuScore} </p>
    
    
    

    `;
      style.innerHTML = `
      .text {
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        color: black;
        margin-top: 20px;
        }
     
`;
      div.appendChild(style);
      this.firstChild?.remove();
      this.appendChild(div);
    }

    // creo el div con los contenido de la pagina
  }
  customElements.define("text-result", TextResult);
}
