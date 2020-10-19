import { InputComponent } from "../../../shared/components/input/input.component";
import { UserService } from "../../../shared/services/user.service";
import { LoadingComponent } from "../../../shared/components/loading/loading.component";
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { AlertComponent } from "../../../shared/components/alert/alert.component";
import { Router } from "../../../shared/router";
import { UserLocalService } from "../../../shared/services/user-local.service";

export class RegisterFormComponent {

    constructor() {
        this.element = null;
        this.alert = new AlertComponent();
        this.loading = new LoadingComponent;
        this.button = new ButtonComponent("Create Account");
        this.inputs = [
            new InputComponent({ placeholder: "Surname", name: "surname" }),
            new InputComponent({ placeholder: "Firstname", name: "firstName" }),
            new InputComponent({ placeholder: "Lastname", name: "lastName" }),
            new InputComponent({ type: "mail", placeholder: "Email", name: "email" }),
            new InputComponent({ type: "phone", placeholder: "Phone", name: "phone" }),
            new InputComponent({ placeholder: "Adress", name: "adress" }),
            new InputComponent({ placeholder: "City", name: "city" }),
            new InputComponent({ placeholder: "Zip", name: "zip" }),
            new InputComponent({ type: "password", placeholder: "Password", name: "password" })
        ];
    }

    display(parent) {
        const form = document.createElement("form");
        this.element = document.createElement("app-register-form");
        this.element.appendChild(form);
        for (const key in this.inputs) {
            if (this.inputs.hasOwnProperty(key)) {
                this.inputs[key + ""].display(form);
            }
        }
        this.button.display(form);
        this.button.element.addEventListener("click", (event) => this.post(event));
        form.setAttribute("method", "post");
        form.setAttribute("action", "");
        parent.appendChild(this.element);
    }

    hide() {
        this.element.parentNode.removeChild(this.element);
    }

    post(event) {
        event.preventDefault();
        const user = UserService.get();
        for (const key in this.inputs) {
            if (this.inputs.hasOwnProperty(key)) {
                user[this.inputs[key + ""]
                    .attributes.name] = this.inputs[key + ""].element.value;
            }
        }
        this.postStart();
        UserService.post()
            .then((data) => this.postSuccess(data, this.postEnd()))
            .catch((xhr) => this.postError(xhr.status, this.postEnd()));
    }

    postStart() {
        if (this.alert.element && this.alert.element.parentNode) {
            this.alert.hide();
        }
        this.loading.display(this.element.firstChild);
        this.button.hide();
    }

    postEnd() {
        this.loading.hide();
        this.button.display(this.element.lastChild);
        this.button.element.addEventListener("click", (event) => this.post(event));
    }

    postError(status) {
        this.alert.text = "Network Error";
        if (409 === status) {
            this.alert.text = "Account already exists";
        } else if (412 === status) {
            this.alert.text = "User error";
        } else if (500 === status) {
            this.alert.text = "Service unvailable";
        }
        this.alert.display(this.element.firstChild);
    }

    postSuccess() {
        UserLocalService.post();
        Router.navigate("login");
    }

}