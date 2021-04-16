import React from "react";
import "../index.css";
import { UserCard } from "./UserCard"
import { SearchPanel } from "./SearchPanel"


export function Container({ children }) {
    return (
        <section className="section">
            <div className="md:container md:mx-auto">
                <main className="main">
                    <UserCard />
                    <div className="bg-white rounded">
                        <SearchPanel></SearchPanel>
                        <div className="content-area bg-white rounded overflow-hidden shadow-lg">
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
}

