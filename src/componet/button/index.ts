export function init() {
  class Button extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const div = document.createElement("div");
      const style = document.createElement("style");
      const value = this.getAttribute("value") || "Click me";

      div.innerHTML = `
      <div class="contenedor">
         
            <input type="button" class="button" value="${value}" >

            
            </div>`;
      style.innerHTML = `
            
            .conteiner{
                display:flex;
                justify-content:center;
                aling-items:center
            }
            .button{
                color: white;
                height:87px ;
                font-size: 45px;
                border: 10px solid #001997;
                border-radius: 10px;
                background: #006CFC;
                width:322px ;
            }
            `;

      this.appendChild(div);
      this.appendChild(style);
    }
  }
  customElements.define("my-button", Button);
}
