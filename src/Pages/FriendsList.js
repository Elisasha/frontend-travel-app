import React, { useEffect } from "react";
import { FriendCard } from "../components/FriendCard";
import { useDispatch, useSelector } from "react-redux";
import { getUserFriendRequests, getUserFriends } from "../store/users/actions";
import { useParams } from "react-router-dom";

export function FriendsList() {
  const dispatch = useDispatch();
  const { uid } = useParams();

  const {
    curUser,
    friendRequests,
    friends,
    filter,
    user,
    pending,
  } = useSelector((state) => {
    const frReqArr = [];
    const frArr = [];
    state.users[uid]?.friendRequests.forEach((frR) => {
      frReqArr.push({ ...state.users[frR], uid: frR });
    });

    state.users[uid]?.friends.forEach((fr) => {
      frArr.push({ ...state.users[fr], uid: fr });
    });

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

    return {
      curUser: state.curUser,
      friendRequests: frReqArr,
      friends: frArr,
      filter: state.sort.filter.toLowerCase(),
      user: state.users[uid],
      pending: state.pending,
    };
  });
  React.useEffect(() => {
    dispatch(getUserFriends(user));
    dispatch(getUserFriendRequests(user));
  }, []);
  console.log("friendlist ", friendRequests, pending);
  if (pending) {
    return <>Loading...</>;
  }

  return (
    <>
      {friendRequests.length > 0 && (
        <h3 className="pt-2 text-center text-lg font-semibold">
          Friend request{friendRequests.length > 1 ? `s` : ``}
        </h3>
      )}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mt-6 px-4">
        {friendRequests
          .filter((frReq) => frReq?.displayName?.toLowerCase().includes(filter))
          // .map((frID) => users[frID])
          .map((friend, index) => (
            <FriendCard {...friend} key={index}></FriendCard>
          ))}
      </div>
      {friends.length > 0 && (
        <h3 className="pt-2 text-center text-lg font-semibold">
          My friend{friends.length > 1 ? `s` : ``}
        </h3>
      )}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mt-6 px-4">
        {friends
          .filter((fr) => fr?.displayName?.toLowerCase().includes(filter))
          .map((friend, index) => (
            <FriendCard {...friend} key={index}></FriendCard>
          ))}
      </div>
    </>
  );
}
