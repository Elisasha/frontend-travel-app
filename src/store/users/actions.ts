import { database } from "../../base";


export function getUserFriends(user: any) {
    return (dispatch: any, getState: any) => {
        const state = getState();
        user.friends.forEach(async (frID: any) => {
            if (!state.users[frID]) {
                const snap = await database.ref('users/' + frID).get()
                const friend = snap.val();
                dispatch(setUser({ [frID]: friend }))
            }
        });
    }
}

function setUser(payload: any) {
    return {
        type: "setUser",
        payload
    }
}

export function getUserFriendRequests(user: any) {
    return (dispatch: any, getState: any) => {
        const state = getState();
        user.friendRequests.forEach(async (frID: any) => {
            if (!state.users[frID]) {
                const snap = await database.ref('users/' + frID).get()
                const friendReq = snap.val();
                dispatch(setUser({ [frID]: friendReq }))
            }
        });
    }
}
