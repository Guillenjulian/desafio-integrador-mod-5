import { state } from "../../state";

export function initStar() {
  const currentState = state.getState();
  console.log(currentState);

  const playerScore = currentState.playHistory.player;
  console.log(playerScore);

  const cpuScore = currentState.playHistory.cpu;
  console.log(cpuScore);

  const result = currentState.playHistory.result;
  console.log(result);
  class Star extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const div = document.createElement("div");
      const style = document.createElement("style");
      const value = this.getAttribute("value") || "Click me";

      div.innerHTML = `
      <div class= "star-container">
      <h1 class = "star-title">Resultado</h1>

      <p class = "text">  TU :${playerScore}</p>
        <p class = "text"> PC. ${cpuScore} </p>


            <div class="star">
            <h2 class ="result">${result}</h2>
            </div>
            </div>

            `;
      style.innerHTML = `

                .star-container {   
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    border: 5px solid black;
                    border-radius: 10px;
                    width: 400px;
                    height: 500px;
                    margin-top: 50px;

                 }
                    .star-title {
                        font-size: 30px;
                        margin-top: 20px;
                        font-family: 'Roboto', sans-serif;
                        font-weight: 700;
                        
                        text-align: start;
                    }
            .star {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 250px;
                height: 250px;
                background-color: green;
                clip-path: polygon(50% 0%, 63% 38%, 100% 38%, 69% 59%, 82% 100%, 50% 75%, 18% 100%, 31% 59%, 0% 38%, 37% 38%);
              }
            `;
      div.appendChild(style);
      this.appendChild(div);
    }
  }

  customElements.define("my-star", Star);
}
