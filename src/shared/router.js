
const routes = {};

let route = null;

export class Router {

    static add(name, url, component) {
        routes[name + ""] = {
            url,
            component
        };
        return Router;
    }

    static navigate(name) {
        if (route) {
            route.component.hide();
        }
        route = routes[name + ""];
        history.pushState({}, name, route.url);
        route.component.display();
        
    }

}