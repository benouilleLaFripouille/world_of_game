export class InputComponent {

    constructor(attributes) {
        this.attributes = attributes;
        this.element = null;
        this.container = null;
    }

    display(parent) {
        this.container = document.createElement("app-input");
        this.element = document.createElement("input");
        for (const key in this.attributes) {
            if (this.attributes.hasOwnProperty(key)) {
                this.element.setAttribute(key, this.attributes[key + ""]);
            }
        }
        this.container.appendChild(this.element);
        parent.appendChild(this.container);
    }

    hide() {
        this.container.parentNode.removeChild(this.container);
    }

}