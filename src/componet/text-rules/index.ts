export function initRules() {
  class TextRules extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const div = document.createElement("div");
      const style = document.createElement("style");
      div.innerHTML = `
        <p class = "rules">
        Presioná jugar
        y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.
        </p>
       
        `;
      style.innerHTML = `
        .rules{
            color: #000000;
            font-size: 40px;
            font-weight: 700;
            font-family: 'Odibee Sans', cursive;
            text-align: center;
            margin: 0 auto;

        }`;

      this.appendChild(div);
      this.appendChild(style);
    }
  }

  customElements.define("my-rules", TextRules);
}
