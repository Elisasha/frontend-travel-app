import React, { useEffect } from "react";
import { FriendCard } from "../components/FriendCard";
import { Container } from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getUserFriendRequests, getUserFriends } from "../store/users/actions";

export function FriendsList() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getUserFriends(curUser));
    dispatch(getUserFriendRequests(curUser));
  }, []);
  const { curUser, users, friendRequests, friends, filter } = useSelector(
    (state) => {
      const frReqArr = [];
      const frArr = [];

      if (
        state.curUser.friendRequests &&
        state.curUser.friendRequests.length > 0
      ) {
        state.curUser.friendRequests.forEach((frR) => {
          frReqArr.push(state.users[frR]);
        });
      }

      if (state.curUser.friends && state.curUser.friends.length > 0) {
        state.curUser.friends.forEach((fr) => {
          frArr.push(state.users[fr]);
        });
      }

      if (frReqArr.length > 0) {
        if (state.sort.order === "ASC") {
          frReqArr.sort((a, b) =>
            a["displayName"] < b["displayName"]
              ? -1
              : a["displayName"] > b["displayName"]
              ? 1
              : 0
          );
        } else {
          frReqArr.sort((a, b) =>
            a["displayName"] > b["displayName"]
              ? -1
              : a["displayName"] < b["displayName"]
              ? 1
              : 0
          );
        }
      }

      if (frArr.length > 0) {
        if (state.sort.order === "ASC") {
          frArr.sort((a, b) =>
            a["displayName"] < b["displayName"]
              ? -1
              : a["displayName"] > b["displayName"]
              ? 1
              : 0
          );
        } else {
          frArr.sort((a, b) =>
            a["displayName"] > b["displayName"]
              ? -1
              : a["displayName"] < b["displayName"]
              ? 1
              : 0
          );
        }
      }

      return {
        curUser: state.curUser,
        users: state.users,
        friendRequests: frReqArr,
        friends: frArr,
        filter: state.sort.filter.toLowerCase(),
      };
    }
  );

  return (
    <Container>
      {friendRequests.length > 0 && (
        <h3 className="pt-2 text-center text-lg font-semibold">
          Friend request{friendRequests.length > 1 ? `s` : ``}
        </h3>
      )}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mt-6 px-4">
        {friendRequests.length > 0
          ? friendRequests
              .filter((frReq) => {
                if (frReq.displayName.toLowerCase().includes(filter)) {
                  return true;
                }
                return false;
              })
              // .map((frID) => users[frID])
              .map((friend, index) => (
                <FriendCard {...friend} key={index}></FriendCard>
              ))
          : ""}
      </div>
      {friends.length > 0 && (
        <h3 className="pt-2 text-center text-lg font-semibold">
          My friend{friends.length > 1 ? `s` : ``}
        </h3>
      )}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mt-6 px-4">
        {friends.length > 0
          ? friends
              .filter((fr) => {
                if (fr.displayName.toLowerCase().includes(filter)) {
                  return true;
                }
                return false;
              })
              .map((friend, index) => (
                <FriendCard {...friend} key={index}></FriendCard>
              ))
          : ""}
      </div>
    </Container>
  );
}
