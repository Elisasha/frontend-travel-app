import React from "react";
import { TripCardLong } from "../components/TripCardLong";
import "../index.css";

export function FriendPage() {
  return (
    <div className="card border max-w-6xl hover:shadow-none relative flex flex-col mx-auto shadow-lg m-5">
      <img
        className="max-h-20 w-full opacity-80 absolute top-0"
        style={{ zIndex: -1 }}
        src="https://unsplash.com/photos/h0Vxgz5tyXA/download?force=true&w=640"
        alt=""
      />
      <div className="profile w-full flex m-3 ml-4 text-white">
        <img
          className="w-28 h-28 p-1 bg-white rounded-full"
          src="https://images.pexels.com/photos/61100/pexels-photo-61100.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb"
          alt=""
        />
        <div className="title mt-11 ml-3 font-bold flex flex-col">
          <div className="name break-words">Sarah</div>
          <div className="add font-semibold text-sm italic dark">Model</div>
        </div>
      </div>
      <div className="buttons flex absolute bottom-0 font-bold right-0 text-xs text-gray-500 space-x-0 my-3.5 mr-3"></div>
      <h1 className="text-gray-800 text-4xl font-semibold text-center m-2">
        Trips
      </h1>
      {Array.from({ length: 6 }).map(TripCardLong)}
    </div>
  );
}
