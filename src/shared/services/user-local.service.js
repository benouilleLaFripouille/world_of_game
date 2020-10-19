import { UserService } from "./user.service";

const user = UserService.get();

export class UserLocalService {

    static post() {
        localStorage.setItem("user", JSON.stringify(user));
    }

    static get() {
        return JSON.parse(localStorage.getItem("user") || "{}");
    }

}