export function init() {
  class Contador extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const shadow = this.attachShadow({ mode: "open" });
      const div = document.createElement("div");
      const style = document.createElement("style");
      div.innerHTML = `
        <div class = "contador"> 
        <div class = "contador__number">  </div>
        <svg class="svg">
              <circle class="svg-circle" r="90" cx="140" cy="140"></circle>
          </svg>
        </div>
            
            `;
      style.innerHTML = `
        .contador{
            margin: 0 auto;
        }
        .contador__number{
            position: relative;
            top: 169px;
            font-weight: 400;
            font-size: 72px;
            text-align: center;
            font-family: 'Faster One', cursive;
            color: #000;
        }
            .svg {
        width: 260px;
        height: 280px;
        transform: rotateY(-180deg) rotateZ(-90deg);
      }
      
      .svg-circle {
        stroke-dasharray: 570px;
        stroke-dashoffset: 0px;
        stroke-linecap: round;
        stroke-width: 19px;
        stroke: #fb0000;
        fill: none;
        animation: countdown 5s linear infinite forwards;
      }
      
      @keyframes countdown {
        from {
          stroke-dashoffset: 0px;
        }
        to {
          stroke-dashoffset: 580px;
        }
      }
     
        
            `;
      let counter = 5;
      const contadorNumerEL = div.querySelector(".contador__number") as any;
      contadorNumerEL.textContent = counter;
      const interval = setInterval(() => {
        counter--;
        contadorNumerEL.textContent = counter;
        if (counter < 3) {
          clearInterval(interval);
        }
      }, 1000);

      shadow.appendChild(div);
      shadow.appendChild(style);
    }
  }
  customElements.define("my-contador", Contador);
}
