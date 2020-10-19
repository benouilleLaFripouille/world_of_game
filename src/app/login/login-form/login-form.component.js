import { InputComponent } from "../../../shared/components/input/input.component";
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { UserService } from "../../../shared/services/user.service";
import { Router } from "../../../shared/router";
import { LoadingComponent } from "../../../shared/components/loading/loading.component";
import { AlertComponent } from "../../../shared/components/alert/alert.component";
import { UserLocalService } from "../../../shared/services/user-local.service";

export class LoginFormComponent {

    constructor() {
        const user = UserLocalService.get();
        this.element = null;
        this.alert = new AlertComponent;
        this.loading = new LoadingComponent;
        this.email = new InputComponent({ value: user.email || "", type: "mail", placeholder: "Email" });
        this.password = new InputComponent({ value: user.password || "", type: "password", placeholder: "Password", });
        this.button = new ButtonComponent("Login");
    }

    display(parent) {
        const form = document.createElement("form");
        this.element = document.createElement("app-login-form");
        this.element.appendChild(form);
        this.email.display(form);
        this.password.display(form);
        this.button.display(form);
        this.button.element.addEventListener("click", (event) => this.login(event));
        form.setAttribute("method", "post");
        form.setAttribute("action", "");
        parent.appendChild(this.element);
    }

    hide() {
        this.email.hide();
        this.password.hide();
        this.button.hide();
        this.element.parentNode.removeChild(this.element);
    }

    login(event) {
        event.preventDefault();
        const user = UserService.get();
        user.email = this.email.element.value;
        user.password = this.password.element.value;
        this.loginStart();
        UserService
            .login()
            .then((data) => this.loginSucces(data, this.loginEnd()))
            .catch((xhr) => this.loginError(xhr.status, this.loginEnd()));
    }

    loginStart() {
        if (this.alert.element && this.alert.element.parentNode) {
            this.alert.hide();
        }
        this.loading.display(this.element.lastChild);
        this.button.hide();
    }

    loginEnd() {
        this.button.display(this.element.lastChild);
        this.button.element.addEventListener("click", (event) => this.login(event));
        this.loading.hide();
    }

    loginSucces(user) {
        UserService.get().token = user.token;
        UserLocalService.post();
        Router.navigate("home");
    }

    loginError(status) {
        this.alert.text = "Network Error";
        if (404 === status) {
            this.alert.text = "BadCredentials";
        } else if (412 === status) {
            this.alert.text = "User error";
        } else if (500 === status) {
            this.alert.text = "Service unvailable";
        }
        this.alert.display(this.element.firstChild);
    }
}