import React from "react";
import { UserCard } from "../components/UserCard";
import './MainPage.css'

export function MainPage() {
    return (
        <section className="section">
            <div className="md:container md:mx-auto">
                <main className="main">
                    <UserCard />
                    <div className="content-area bg-white rounded overflow-hidden shadow-lg">
                        {/* TODO remove style */}
                        <div style={{ height: 3000, background: 'salmon' }}></div>
                    </div>
                </main>
            </div>
        </section>
    );
}