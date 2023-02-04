export function init() {
  class ManoTijera extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const img: any = document.createElement("img");
      const imgSrc = require("../../image/tijera.png");
      img.src = imgSrc;
      this.appendChild(img);
    }
  }
  customElements.define("mano-tijera", ManoTijera);
}
