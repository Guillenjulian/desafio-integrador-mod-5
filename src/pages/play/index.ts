import { state } from "../../state";

export function initPlay(params) {
  // si pasado 5 segundos no se   hace movimiento vuelve a la pagina de reglas

  let counter = 5;

  //   const interavalidId = setInterval(() => {
  //     counter--;
  //     if (counter < 1) {
  //       clearInterval(interavalidId);
  //       params.goTo("/reglas");
  //     }
  //   }, 1000);

  const div = document.createElement("div");
  const style = document.createElement("style");
  // creo el div con los contenido de la pagina
  div.className = "contenedor";

  div.innerHTML = `
<div class="contenedor">

<div class = "cpu-componet">
<mano-piedra class = "pc-piedra"></mano-piedra>


<mano-papel  class = "pc-papel "></mano-papel>



<mano-tijera class = "pc-tijera"> </mano-tijera>
</div>

<my-contador class = "contador"></my-contador>
 
<div class = "manos">

<div class = "player-componet">
<mano-piedra class = "mano-piedra"></mano-piedra>


<mano-papel  class = "mano-papel "></mano-papel>



<mano-tijera class = "mano-tijera"> </mano-tijera>
</div>




</div>
</div>
`;
  style.innerHTML = `
  .contenedor{
  height:100vh;
  display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  
  }
  
    .mano{
        margin:0  20px;
    }


  `;
  // creo el setTimout para que se ejecute la funcion cada 1 segundo

  //   setTimeout(() => {
  //     params.goTo("/result");
  //   }, 1000);

  //

  div.appendChild(style);
  return div;
}
