import React from 'react';
import { FriendCard } from "../components/FriendCard";
import { Container } from '../components/Container';


export function FriendsList() {
    return (
        <Container>
            {/* <div className="grid gap-1 grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 mt-6 px-4"> */}
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mt-6 px-4">
                {Array.from({ length: 10 }).map(index => <FriendCard key={index}></FriendCard>)}
            </div>
        </Container>
    );
}