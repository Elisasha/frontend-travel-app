import React from "react";
import { Container } from "../components/Container";
import { TripCard } from "../components/TripCard";
import "../index.css";

function PlaceName() {
    return (
        <Container>
            <div className="blogs__wraper bg-green-300  py-20 px-20">
                <h1 className="text-gray-800 text-4xl font-semibold text-center">My trips</h1>
                <div className="">
                    {/* <div class="flex items-center flex-wrap"> */}
                    {Array.from({ length: 6 }).map(TripCard)}
                </div>
            </div>
        </Container>
    );
}

export default PlaceName;
