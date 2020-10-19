export class TitleComponent {

    constructor(text) {
        this.text = text;
        this.element = null;
    }

    display(parent) {
        this.element = document.createElement("app-title");
        const title = document.createElement("h1");
        this.element.appendChild(title);
        title.appendChild(document.createTextNode(this.text));
        parent.appendChild(this.element);
    }

    hide() {
        this.element.parentNode.removeChild(this.element);
    }

}