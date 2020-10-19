import { BrandTitleComponent } from "../../shared/components/brand-title/brand-title.component";

export class HomeComponent {

    constructor() {
        this.element = null;
        this.title = new BrandTitleComponent("Welcome Home");
    }

    display() {
        this.element = document.createElement("app-home");
        this.title.display(this.element);
        document.body.appendChild(this.element);
    }

    hide() {
        this.title.hide();
        this.element.parentNode.removeChild(this.element);
    }

}