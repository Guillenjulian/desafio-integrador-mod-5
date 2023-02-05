export function init() {
  class Text extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const div = document.createElement("div");
      const style = document.createElement("style");

      div.innerHTML = `
            <div class="container">
            <h1 class = "title">
            Piedra, 
            <br>
            Papel ó
            <br>
            tijeta
            <br>

            
            </h1>
            </div>`;
      style.innerHTML = `
            .container{
                display:flex;
                justify-content:center;
                aling-items:center
            }
            .title{
               color: #009048;;
                font-size: 80px;
                font-weight: 700;
                font-family: 'Odibee Sans', cursive;
                text-align: center;
                margin: 25px auto;

            }
            `;
      this.appendChild(div);
      this.appendChild(style);
    }
  }
  customElements.define("my-text", Text);
}
