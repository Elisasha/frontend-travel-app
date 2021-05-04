import moment from "moment";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./TripCard.css";

import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { unsplash } from "../unsplash.js";

export function TripCard({ country, startDate, trID, rating, cities }) {
  const [bgimageURL, setbgimageURL] = useState(
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1866&q=80"
  );

  unsplash.photos
    .getRandom({ query: country.replace(/\s/g, "") })
    .then((result) => {
      if (result.type === "success") {
        setbgimageURL(result.response.urls.regular);
      }
    });

  const month = moment(startDate).format("MMMM");
  const day = moment(startDate).format("D");
  const { uid } = useParams();
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
          <Box component="fieldset" borderColor="transparent">
            <Rating
              name="simple-controlled"
              value={rating}
              precision={0.5}
              readOnly
            />
          </Box>
        </div>
      </div>
      <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
        <div className="text-center">
          <Link to={"/" + uid + "/trips/" + trID} bgimageURL={bgimageURL}>
            <button className="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">
              View
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
