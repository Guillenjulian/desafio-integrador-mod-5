export function initRules() {
  class TextRules extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const div = document.createElement("div");
      const style = document.createElement("style");
      div.className = "div_rules";
      div.innerHTML = `
        <p class = "rules">
        Presioná jugar
        y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.
        </p>
       
        `;
      style.innerHTML = `

        .div_rules{
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 240px;
            width: 317px;
        }
        @media (max-width: 768px) {
            .div_rules{
              
            }
        }
        .rules{
            color: #000000;
            font-size: 50px;
            font-weight: 700;
            font-family: 'Odibee Sans', cursive;
            text-align: center;
            margin: 0 auto;
            text-align: center;

        }
        @media (max-width: 768px) {
            .rules{
                font-size: 40px;
                font-weight: 400;
            }
        }
        
        `;

      this.appendChild(div);
      this.appendChild(style);
    }
  }

  customElements.define("my-rules", TextRules);
}
