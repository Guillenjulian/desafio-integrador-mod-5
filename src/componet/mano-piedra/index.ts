export function init() {
  class ManoPiedra extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const img: any = document.createElement("img");
      const imgSrc = require("../../image/piedra.png");
      img.src = imgSrc;
      this.appendChild(img);
    }
  }
  customElements.define("mano-piedra", ManoPiedra);
}
