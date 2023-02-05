export function init() {
  class ManoPapel extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const imgSrc = require("../../image/papel.png");
      const div = document.createElement("div");
      const style = document.createElement("style");
      div.className = "paper";
      div.innerHTML = `
    <img src="${imgSrc}" alt="papel" class  ="paper-img" />
    `;
      style.innerHTML = `
    .paper{
      display: flex;
    }
    .paper-img{
      height: 145px;
      width: 61px;
      object-position: 0px 40px;
    }
    @media (min-width: 768px) {
      .paper-img{
        height: 168px;
        width: 69px;
        object-position: 0px 60px;
      }`;
      this.appendChild(div);
      this.appendChild(style);
    }
  }
  customElements.define("mano-papel", ManoPapel);
}
