import { LoginFormComponent } from "./login-form/login-form.component";
import { BrandTitleComponent } from "../../shared/components/brand-title/brand-title.component";
import { ButtonComponent } from "../../shared/components/button/button.component";
import { UserLocalService } from "../../shared/services/user-local.service";
import { Router } from "../../shared/router";

export class LoginComponent {

    constructor() {
        this.element = null;
        this.title = new BrandTitleComponent("World's of game");
        this.loginForm = new LoginFormComponent();
        this.button = new ButtonComponent("SignUp for free");
    }

    display() {
        this.element = document.createElement("app-login");
        this.title.display(this.element);
        this.loginForm.display(this.element);
        this.button.display(this.element);
        this.button.element.addEventListener("click", () => Router.navigate("register"));
        document.body.appendChild(this.element);
        if (UserLocalService.get().token) {
            Router.navigate("home");
        }
    }

    hide() {
        this.title.hide();
        this.loginForm.hide();
        this.button.hide();
        this.element.parentNode.removeChild(this.element);
    }

}