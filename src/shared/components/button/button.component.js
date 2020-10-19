export class ButtonComponent {

    constructor(text) {
        this.text = text;
        this.element = null;
        this.container = null;
    }

    display(parent) {
        this.container = document.createElement("app-button");
        this.element = document.createElement("button");
        this.element.appendChild(document.createTextNode(this.text));
        this.container.appendChild(this.element);
        parent.appendChild(this.container);
    }

    hide() {
        this.container.parentNode.removeChild(this.container);
    }

}