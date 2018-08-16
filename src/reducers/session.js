const initialSession = {
    user:  {
        username: "manager",
        password: "manager",
        role: "manager"
    },
    message: null

}

const session = (state = initialSession, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload,
                message: null
            }
            break;
        case "LOGIN_FAILED":
            return {
                ...state,
                user: null,
                message: "Invalid Credentials" 
            }
            break;

        case "LOGOUT":
            return {
                ...state,
                user: null,
                message: null
            }
            break;

        default:
            return {
                ...state,
            }
            break;
    }
}

module.exports = session;