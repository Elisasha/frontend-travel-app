import React from "react";
import { Rating } from "../components/Rating";

export function TripCard() {
    return (
        <div className="blogs bg-white mr-5 w-80 m-4 bg-white border-2 border-gray-300 p-5 rounded-md tracking-wide shadow-lg">
            <img src="https://images.unsplash.com/photo-1489396160836-2c99c977e970?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" className=""></img>
            <div className="p-5 pb-0">
                <h1 className="placeName text-2xl font-bold text-green-800 py-2">Iceland</h1>
                <p className="dates bg-white text-base text-black">01.05.2021-14.05.2021</p>
                <Rating></Rating>
                <a href="" className="py-2 px-3 mt-4 px-8 text-white bg-blue-400 inline-block rounded">Read More</a>
            </div>
        </div>
    );
}