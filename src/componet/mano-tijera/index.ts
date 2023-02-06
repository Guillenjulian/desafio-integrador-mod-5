export function init() {
  class ManoTijera extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const imgSrc = require("../../image/tijera.png");
      const img: any = document.createElement("img");
      const style = document.createElement("style");
      img.className = "tijera-img";

      img.src = imgSrc;

      style.innerHTML = `
    .tijera-img{
      height: 145px;
      width: 61px;
      object-position: 0px 40px;
    }
    @media (min-width: 768px) {
      .tijera-img{
        height: 168px;
        width: 69px;
        object-position: 0px 60px;
      }`;
      this.appendChild(style);

      this.appendChild(img);
    }
  }
  customElements.define("mano-tijera", ManoTijera);
}
