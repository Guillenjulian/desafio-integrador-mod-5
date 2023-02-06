export function init() {
  class ManoPiedra extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const imgSrc = require("../../image/piedra.png");
      const img = document.createElement("img");
      const style = document.createElement("style");
      img.className = "piedra-img";
      img.src = imgSrc;
      style.innerHTML = `
   
    .piedra-img{
      height: 145px;
      width: 61px;
      object-position: 0px 40px;
    }
    @media (min-width: 768px) {
      .piedra-img{
        height: 168px;
        width: 69px;
        object-position: 0px 60px;
      }`;
      img.appendChild(style);

      this.appendChild(img);
    }
  }
  customElements.define("mano-piedra", ManoPiedra);
}
