import React from "react";
import "../index.css";
import {UserCard} from "./UserCard"

export function Container({ children }) {
    return (
        <section className="section">
            <div className="md:container md:mx-auto">
                <main className="main">
                    <UserCard />
                    <div className="content-area bg-white rounded overflow-hidden shadow-lg">
                        {children}
                    </div>
                </main>
            </div>
        </section>
    );
}

