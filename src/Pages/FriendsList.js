import React, { useEffect } from 'react';
import { FriendCard } from "../components/FriendCard";
import { Container } from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getUserFriendRequests, getUserFriends } from '../store/users/actions';


export function FriendsList() {
    const { curUser, users } = useSelector((state) => { return { curUser: state.curUser, users: state.users } });
    const dispatch = useDispatch();
    React.useEffect(() => { dispatch(getUserFriends(curUser)); dispatch(getUserFriendRequests(curUser)) }, [])
    return (
        <Container>
            {curUser.friendRequests.length > 0 && <h3>Friend requests</h3>}
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mt-6 px-4">
                {curUser.friendRequests.map(frID => users[frID]).map((friend, index) => <FriendCard {...friend} key={index}></FriendCard>)}
            </div>
            {curUser.friends.length > 0 && <h3>My friends</h3>}
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mt-6 px-4">
                {curUser.friends.map(frID => users[frID]).map((friend, index) => <FriendCard {...friend} key={index}></FriendCard>)}
            </div>
        </Container>
    );
}