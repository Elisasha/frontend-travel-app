import React from "react";
import "../index.css";
import { UserCard } from "./UserCard";
import { SearchPanel } from "./SearchPanel";
import { useRouteMatch } from "react-router-dom";

export function Container({ children }) {
  let match = useRouteMatch("/addtrip");

  return (
    <section className="section">
      <div className="md:container md:mx-auto">
        <main className="main">
          <UserCard />
          <div className="bg-white rounded flex-grow">
            {!match && <SearchPanel></SearchPanel>}
            <div className="content-area bg-white rounded overflow-hidden shadow-lg">
              {children}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
