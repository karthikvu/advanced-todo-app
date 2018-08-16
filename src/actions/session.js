import { users } from "../data/users";
export function login(credentials){
    const matchingUsers = users.filter(user => user.username == credentials.username);
    const matchedUser = matchingUsers[0];
    if(matchedUser == null){
        return {
            type: "LOGIN_FAILED",
            payload : {}
        }
    }
    if(matchedUser.password == credentials.password){
        console.log("matched")
        return {
            type: "LOGIN",
            payload : matchedUser
        }
    } else {
        return {
            type: "LOGIN_FAILED",
            payload : {}
        }
    }
    
}
export function logout(){

}