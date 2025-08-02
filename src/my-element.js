const template = document.createElement("div");
        template.innerHTML = "<p>Texto por medio de un inner html</p>";

class MyElement extends HTMLElement{
    constructor(){
        super();
        console.log("estoy en el constructor");
        //generamos elemento que se vuelven nodos y os agregaos al dom        
        //this.p = document.createElement("p");
        
    }

    connectedCallback(){
        //generamos elemento que se vuelven nodos, les ponemos info y los agregamos al dom
        /*
        this.p.textContent = "EStons son customs elements";
        this.appendChild(this.p);
        */
        this.appendChild(template);

    }

    
}
customElements.define("my-element", MyElement);