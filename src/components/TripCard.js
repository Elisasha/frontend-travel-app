import React from "react";
import "./TripCard.css";

export function TripCard({ country }) {
  return (
    <div className="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div overflow-hidden relative">
      <div className="w-full">
        <div className="image-cover rounded-t-md">
          <div className="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
            <span className="text-base tracking-wide  font-bold border-b border-white font-sans">
              {" "}
              12
            </span>
            <span className="text-xs tracking-wide font-bold uppercase block font-sans">
              April
            </span>
          </div>
        </div>
        <div className="py-2 px-2 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
          <span className="block text-2xl text-gray-800 font-bold tracking-wide">
            {country}
          </span>
          <span className="block text-gray-600 text-sm">
            Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec
            bibendum faucibus purus eget cursus. Proin enim ante, scelerisque
            vel sem sit amet, ultrices mollis risus. Praesent justo felis,
            ullamcorper a cursus sed, condimentum at dui.
          </span>
          {/* <span className="block text-gray-600 text-sm">Vivamus.</span> */}
        </div>
      </div>

      <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
        {/* <span className="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">Paris city of light</span> */}
        <div className="text-center">
          <button className="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">
            View
          </button>
        </div>
      </div>
    </div>
  );
}
