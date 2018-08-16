
export function getComponent(componentName){
    switch (componentName) {
        case "Login":
            return require("../components/Login/Login")
            break;
    
        case "Dashboard":
            return require("../components/Dashboard/Dashboard")
            break;
    
        case "TestComponent":
            return require("../components/TestComponent")
            break;
        case "AppContainer":
            return require("../components/AppContainer")
            break;
    
        default:
            return require("../components/404")
            break;
    }
}



