import moment from "moment";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./TripCard.css";
// import { unsplash } from "../unsplash";
import nodeFetch from "node-fetch";
import { createApi } from "unsplash-js";

export function TripCard({ country, startDate, trID }) {
  // const bgimageURL = "";
  const [bgimageURL, setbgimageURL] = useState(
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1866&q=80"
  );
  const unsplash = createApi({
    accessKey: "P8F9weIEakms5lC3EPeU1UbZiQpV2yiL5lWzE3Be98o",
    fetch: nodeFetch,
  });

  unsplash.photos.getRandom({ query: country }).then((result) => {
    if (result.type === "success") {
      setbgimageURL(result.response.urls.regular);
    }
  });

  const month = moment(startDate).format("MMMM");
  const day = moment(startDate).format("D");
  const { uid } = useParams();
  // "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80";""
  return (
    <div
      className="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div overflow-hidden relative"
      style={{ backgroundImage: `url(${bgimageURL})` }}
    >
      <div className="w-full">
        <div className="image-cover rounded-t-md">
          <div className="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
            <span className="text-base tracking-wide  font-bold border-b border-white font-sans">
              {day}
            </span>
            <span className="text-xs tracking-wide font-bold uppercase block font-sans">
              {month}
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
        </div>
      </div>
      <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
        <div className="text-center">
          <Link to={"/" + uid + "/trips/" + trID}>
            <button className="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">
              View
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
