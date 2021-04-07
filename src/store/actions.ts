// import { INCREMENT, DECREASE } from "./actionTypes";

export function setCurrentUser(user: any) {
    return {
        type: "setCurrentUser",
        payload: user
    };
}

export function logoutUser() {
return {
    type: "logoutUser",
}
}


