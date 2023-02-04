export function init() {
  class ManoPapel extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const img: any = document.createElement("img");
      const imgSrc = require("../../image/papel.png");
      img.src = imgSrc;
      this.appendChild(img);
    }
  }
  customElements.define("mano-papel", ManoPapel);
}
