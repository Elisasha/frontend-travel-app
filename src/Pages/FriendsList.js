import React from 'react';
import { UserCard } from "../components/UserCard";
import { FriendCard } from "../components/FriendCard";


export function FriendsList() {
    return (
        <section className="section">
            <div className="md:container md:mx-auto">
                <main className="main">
                    <UserCard />
                    <div className="content-area bg-white rounded overflow-hidden shadow-lg">
                        {/* <div class="grid gap-1 grid-cols-1 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 mt-6 px-4"> */}
                        <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mt-6 px-4">
                            {Array.from({ length: 10 }).map(index => <FriendCard key={index}></FriendCard>)}
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
}