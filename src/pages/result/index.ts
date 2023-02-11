import { state } from "../../state";

export function initResult(params) {
  const currentState: any = state.getState();
  console.log(currentState, "state");

  const playerScore: number = currentState.playHistory.player;
  //console.log(playerScore, "player");

  const cpuScore: number = currentState.playHistory.cpu;
  //console.log(cpuScore, "cpu");

  const resultEL: string = currentState.playHistory.result;
  // console.log(resultEL, "result");
  const div = document.createElement("div");
  const style = document.createElement("style");

  function handel() {
    const starCmon: any = div.querySelector(".star");

    if (resultEL == "Ganaste") {
      starCmon.style.backgroundColor = "green";
    } else if (resultEL == "Perdiste") {
      starCmon.style.backgroundColor = "red";
    } else if (resultEL == "Empate") {
      starCmon.style.backgroundColor = "yellow";
    }
  }
  // creo el div con los contenido de la pagina

  div.innerHTML = `
  <div class="contenedor">
  
 
  <div class= "star-container">
  <h1 class = "star-title">Resultado</h1>
  
  <p class = "text">  TU :${playerScore | 0}</p>
  <p class = "text"> PC. ${cpuScore | 0} </p>
  
  
  <div class="star">
  <h2 class ="result">${resultEL}</h2>
  </div>
  </div>

  <my-button  class="boton"    value="Volver a jugar" ></my-button>
  <my-button  class="boton1"  " value="Salir" ></my-button>

  
  </div>
  `;
  style.innerHTML = `
 .container {
   
}
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
.star-container {   
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 5px solid black;
  border-radius: 10px;
  width: 400px;
  height: 500px;
  margin-top: 40px;
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 800'%3E%3Cdefs%3E%3CradialGradient id='a' cx='400' cy='400' r='36.9%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%231EA2FF'/%3E%3C/radialGradient%3E%3CradialGradient id='b' cx='400' cy='400' r='80.9%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%231E85FF'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='800'/%3E%3Cg fill-opacity='0.89'%3E%3Cpath fill='url(%23b)' d='M998.7 439.2c1.7-26.5 1.7-52.7 0.1-78.5L401 399.9c0 0 0-0.1 0-0.1l587.6-116.9c-5.1-25.9-11.9-51.2-20.3-75.8L400.9 399.7c0 0 0-0.1 0-0.1l537.3-265c-11.6-23.5-24.8-46.2-39.3-67.9L400.8 399.5c0 0 0-0.1-0.1-0.1l450.4-395c-17.3-19.7-35.8-38.2-55.5-55.5l-395 450.4c0 0-0.1 0-0.1-0.1L733.4-99c-21.7-14.5-44.4-27.6-68-39.3l-265 537.4c0 0-0.1 0-0.1 0l192.6-567.4c-24.6-8.3-49.9-15.1-75.8-20.2L400.2 399c0 0-0.1 0-0.1 0l39.2-597.7c-26.5-1.7-52.7-1.7-78.5-0.1L399.9 399c0 0-0.1 0-0.1 0L282.9-188.6c-25.9 5.1-51.2 11.9-75.8 20.3l192.6 567.4c0 0-0.1 0-0.1 0l-265-537.3c-23.5 11.6-46.2 24.8-67.9 39.3l332.8 498.1c0 0-0.1 0-0.1 0.1L4.4-51.1C-15.3-33.9-33.8-15.3-51.1 4.4l450.4 395c0 0 0 0.1-0.1 0.1L-99 66.6c-14.5 21.7-27.6 44.4-39.3 68l537.4 265c0 0 0 0.1 0 0.1l-567.4-192.6c-8.3 24.6-15.1 49.9-20.2 75.8L399 399.8c0 0 0 0.1 0 0.1l-597.7-39.2c-1.7 26.5-1.7 52.7-0.1 78.5L399 400.1c0 0 0 0.1 0 0.1l-587.6 116.9c5.1 25.9 11.9 51.2 20.3 75.8l567.4-192.6c0 0 0 0.1 0 0.1l-537.3 265c11.6 23.5 24.8 46.2 39.3 67.9l498.1-332.8c0 0 0 0.1 0.1 0.1l-450.4 395c17.3 19.7 35.8 38.2 55.5 55.5l395-450.4c0 0 0.1 0 0.1 0.1L66.6 899c21.7 14.5 44.4 27.6 68 39.3l265-537.4c0 0 0.1 0 0.1 0L207.1 968.3c24.6 8.3 49.9 15.1 75.8 20.2L399.8 401c0 0 0.1 0 0.1 0l-39.2 597.7c26.5 1.7 52.7 1.7 78.5 0.1L400.1 401c0 0 0.1 0 0.1 0l116.9 587.6c25.9-5.1 51.2-11.9 75.8-20.3L400.3 400.9c0 0 0.1 0 0.1 0l265 537.3c23.5-11.6 46.2-24.8 67.9-39.3L400.5 400.8c0 0 0.1 0 0.1-0.1l395 450.4c19.7-17.3 38.2-35.8 55.5-55.5l-450.4-395c0 0 0-0.1 0.1-0.1L899 733.4c14.5-21.7 27.6-44.4 39.3-68l-537.4-265c0 0 0-0.1 0-0.1l567.4 192.6c8.3-24.6 15.1-49.9 20.2-75.8L401 400.2c0 0 0-0.1 0-0.1L998.7 439.2z'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;;
}

@media (max-width: 768px){
.star-container{
  width: 350px;
  height: 400px;
  margin-button: 20px;
}
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

@media (max-width: 768px){
.star {
  width: 150px;
  height: 150px;
}
}

.result {
font-size: 30px;
font-family: 'Roboto', sans-serif;
font-weight: 700;
color: #000;

}
@media (max-width: 768px){
.result {
  font-size: 20px;
}
}
.text {
font-size: 20px;
font-family: 'Roboto', sans-serif;
font-weight: 700;
color: black;
margin-top: 20px;
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

  div.appendChild(style);
  handel();
  handleClick();

  return div;
}
