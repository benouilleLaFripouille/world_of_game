import { TitleComponent } from "../title/title.component";

export class BrandTitleComponent {

    constructor(text) {
        this.title = new TitleComponent(text);
        this.element = null;
    }

    display(parent) {
        this.element = document.createElement("app-brand-title");
        const logo = document.createElement("img");
        this.element.appendChild(logo);
        this.title.display(this.element);
        logo.setAttribute("alt", "Logo");
        logo.setAttribute("src", "assets/images/logo.png");
        parent.appendChild(this.element);
    }

    hide() {
        this.title.hide();
        this.element.parentNode.removeChild(this.element);
    }

}