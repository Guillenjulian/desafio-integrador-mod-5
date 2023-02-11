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
      justify-content: space-between;
      height: 100%;
      margin:25px ;
      gap: 20px;
    }
    
    
    @media (max-width: 768px){
      
      .contenedor{
        

       

    }
  }
    .manos{
     display: flex;
      justify-content: space-evenly;
      width: 100%;


    }
    @media (max-width: 768px){
    .manos{
      
      width: 100%;
      ;

    }
    }
    
    
    `;
  function handleClick() {
    const boton = div.querySelector(".boton");
    boton?.addEventListener("click", () => {
      params.goTo("/play");
    });
  }

  div.appendChild(style);
  handleClick();

  return div;
}
