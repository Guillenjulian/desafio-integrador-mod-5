export function init() {
  class ManoPiedra extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const imgSrc = require("../../image/piedra.png");
      const div = document.createElement("div");
      const style = document.createElement("style");
      div.className = "paper";
      div.innerHTML = `
    <img src="${imgSrc}" alt="papel" class  ="piedra-img" />
    `;
      style.innerHTML = `
    .paper{
      display: flex;
    }
    .piedr-img{
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
      div.appendChild(style);

      this.appendChild(div);
    }
  }
  customElements.define("mano-piedra", ManoPiedra);
}
