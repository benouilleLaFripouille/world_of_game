import { TitleComponent } from "../../shared/components/title/title.component";
import { RegisterFormComponent } from "./register-form/register-form.component";

export class RegisterComponent {

    constructor() {
        this.element = null;
        this.title = new TitleComponent("World's of game");
        this.registerForm = new RegisterFormComponent();
    }

    display() {
        this.element = document.createElement("app-register");
        this.title.display(this.element);
        this.registerForm.display(this.element);
        document.body.appendChild(this.element);
    }

    hide() {
        document.body.removeChild(this.element);
    }

}