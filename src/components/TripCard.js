import React from "react";
import "./TripCard.css";

export function TripCard() {
    return (
        <div class="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div overflow-hidden relative">
            <div className="w-full">
                <div class="image-cover rounded-t-md" >
                    <div class="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                        <span class="text-base tracking-wide  font-bold border-b border-white font-sans"> 12</span>
                        <span class="text-xs tracking-wide font-bold uppercase block font-sans">April</span>
                    </div>
                </div>
                <div class="py-2 px-2 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                    <span class="block text-2xl text-gray-800 font-bold tracking-wide">France</span>
                    {/* <span class="block text-gray-600 text-sm">Vivamus.</span> */}
                </div>
            </div>

            <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
                {/* <span class="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">Paris city of light</span> */}
                <div class="text-center">
                    <button class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">View</button>
                </div>
            </div>
        </div>
    );
}