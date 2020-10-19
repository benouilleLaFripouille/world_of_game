import { Router } from "./shared/router";
import { LoginComponent } from "./app/login/login.component";
import { RegisterComponent } from "./app/register/register.component";
import { HomeComponent } from "./app/home/home.component";

Router
    .add(
        "login",
        "/login",
        new LoginComponent
    ).add(
        "register",
        "/register",
        new RegisterComponent
    ).add(
        "home",
        "/home",
        new HomeComponent
    )
    .navigate("login");