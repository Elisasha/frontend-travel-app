import React from 'react';
import { UserCard } from "../components/UserCard";
import { TripCard } from "../components/TripCard";


export function Triplist() {
    return (
        <section className="section">
            <div className="md:container md:mx-auto">
                <main className="main">
                    <UserCard />
                    <div className="content-area bg-white rounded overflow-hidden shadow-lg">
                        {/* TODO remove style */}
                        {/* <div style={{ height: 3000, background: 'salmon' }}></div> */}
                        <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 px-4">
                            {Array.from({ length: 10 }).map(index => <TripCard key={index}></TripCard>)}
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
}