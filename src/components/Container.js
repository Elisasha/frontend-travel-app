import React from "react";
import { TripCard } from "../components/TripCard";
import "../index.css";

export function Container({children}) {
    return (
        <div classNameName="h-screen font-sans">
            <div classNameName="container mx-auto flex m-2">
                {children}
            </div>
        </div>
    );
}

