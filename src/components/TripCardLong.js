import React from "react";
import { Rating } from "../components/Rating";

export function TripCardLong() {
    return (
        // <div className="max-w-3xl bg-white border-2 border-gray-300 p-5 rounded-md tracking-wide shadow-lg m-2">
        <div className="flex justify-center bg-white border-2 border-gray-300 p-5 rounded-md tracking-wide shadow-lg m-2">
            <img alt="mountain" className="w-45 rounded-md border-2 border-gray-300" src="https://picsum.photos/seed/picsum/200" />
            <div id="body" className="flex flex-col ml-5">
                <h2 id="name" className="text-xl font-semibold mb-2">Norway</h2>
                <h4 id="name" className="text-base font-semibold mb-2">01.09.2021-14.09.2021</h4>
                <p id="job" className="text-gray-800 mt-2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis vitae qui distinctio ex soluta? Voluptates, ea! Esse, natus. Quas possimus laboriosam consectetur deserunt ea sapiente. Dicta ipsam atque voluptatem!</p>
                <div className="flex mt-5">
                    {/* <img alt="avatar" className="w-6 rounded-full border-2 border-gray-300" src="https://picsum.photos/seed/picsum/200" /> */}
                    <Rating></Rating>
                </div>
            </div>
        </div>
        // </div>

    );
}