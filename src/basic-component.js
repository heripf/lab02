class BasicComponent extends HTMLElement{

    //con template se mejora el rendimiento con el document fragment
    //lo que regresa template debemos clonarlo para renderizarlo
    constructor(){
        super();
        console.log("*estoy en el constructorde basic component");

        //shadow dom, mode openpra ver el contenido
        this.attachShadow({mode: "open"});    

    }
    //
    getTemplate(){
        console.log("get template");
        const template = document.createElement("template");
        //template.innerHTML = "<p>ESto es el template con shadow root</p>";
        //uso de slot es un lugar donde se inyectara contenido que viene desde el html
        template.innerHTML = this.getStyles()+"<p><slot></slot></p>";

        return template;
        
    }

    getStyles(){
        return "<style>:host{display: inline-block;</style>";
    }

    connectedCallback(){
        
        console.log("connectedCallback:el elemento ya existe en el dom, es un nodo del dom, ya es visible en pgina");
        this.render();
    }

    render(){
        console.log("render");
        //clonar el contenido del tempate para agegarlo al dom
        // para el shadow dom esto no funciona 
        // this.appendChild(this.getTemplate().content.cloneNode(true));
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
    }

    
}
customElements.define("basic-component", BasicComponent);