import { database } from "../../base";

export function getUserFriends(user: any) {
  return (dispatch: any, getState: any) => {
    const state = getState();
    if (user?.friends) {
      user?.friends.forEach(async (frID: any) => {
        if (!state.users[frID]) {
          const snap = await database.ref("users/" + frID).get();
          const friend = snap.val();
          dispatch(setUser({ [frID]: friend }));
        }
      });
    }
  };
}

export function setUser(payload: any) {
  return {
    type: "setUser",
    payload,
  };
}

export function getUserFriendRequests(user: any) {
  return (dispatch: any, getState: any) => {
    const state = getState();
    if (user?.friendRequests) {
      user.friendRequests.forEach(async (frID: any) => {
        if (!state.users[frID]) {
          const snap = await database.ref("users/" + frID).get();
          const friendReq = snap.val();
          dispatch(setUser({ [frID]: friendReq }));
        }
      });
    }
  };
}
