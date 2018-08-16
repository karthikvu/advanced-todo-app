import { getComponent } from "./componentList";
export function mapRoutes(){
    let routes = {
        path: '/',
        component: "AppContainer",
        indexRoute: {
            component: "Dashboard"
        },
        childRoutes: [{
                path: 'test',
                component: "TestComponent"
            },
            {
                path: "login",
                component: "Login"
            }
        ]
    };
    console.log(routes)
    routes.component = getComponent(routes.component);
    routes.indexRoute.component = getComponent(routes.indexRoute.component);
    routes.childRoutes.map(route => {
        route.component = getComponent(route.component);
    })
    console.log(routes)
    return routes;
}