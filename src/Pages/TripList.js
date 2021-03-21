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
                        <div className="card max-w-screen-2xl hover:shadow-none relative flex flex-col mx-auto m-5">
                            <div className="flex items-center flex-wrap">
                                {Array.from({ length: 9 }).map(index => <TripCard key={index}></TripCard>)}
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </section>
    );
}