export class LoadingComponent {

    constructor() {
        this.element = null;
    }

    display(parent) {
        this.element = document.createElement("app-loading");
        parent.appendChild(this.element);
    }

    hide() {
        this.element.parentNode.removeChild(this.element);
    }

}