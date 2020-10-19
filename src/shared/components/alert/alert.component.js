export class AlertComponent {

    constructor(text) {
        this.text = text;
        this.element = null;
    }

    display(parent) {
        this.element = document.createElement("app-alert");
        this.element.appendChild(document.createTextNode(this.text));
        parent.insertBefore(this.element, parent.firstChild);
    }

    hide() {
        this.element.parentNode.removeChild(this.element);
    }

}