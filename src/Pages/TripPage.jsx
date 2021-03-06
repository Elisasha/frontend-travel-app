import React, { useEffect, useState } from "react";
import "../components/Calendar.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addTrip, removeTrip, setRating } from "../store/trips/actions";
import { database } from "../base";
import { useHistory } from "react-router-dom";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import { unsplash } from "../unsplash.js";

export function TripPage() {
  const { tripID } = useParams();
  const { trip, curUserUid } = useSelector((state) => {
    return {
      trip: state.trips[tripID],
      curUserUid: state.curUser.uid,
    };
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const [bgimageURL, setbgimageURL] = useState(
    "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1866&q=80"
  );

  unsplash.photos
    .getRandom({ query: trip.country.replace(/\s/g, "") })
    .then((result) => {
      if (result.type === "success") {
        setbgimageURL(result.response.urls.regular);
      }
    });

  useEffect(() => {
    if (!trip) {
      database
        .ref("trips/" + tripID)
        .get()
        .then((snap) => {
          const snapTr = snap.val();
          dispatch(addTrip(tripID, snapTr));
        });
    }
  }, []);

  if (!trip) {
    return <>Loading...</>;
  }
  async function deleteTrip() {
    const tripsRef = database.ref("users/" + curUserUid + "/trips/");
    tripsRef.get().then((snap) => {
      const allTrips = snap.val();
      const firebKey = Object.entries(allTrips).find(
        (value) => value[1] === tripID
      )[0];
      const { [firebKey]: toDelete, ...fullTr } = allTrips;
      tripsRef.set(fullTr);
    });
    await database.ref("trips/" + tripID).remove();
    dispatch(removeTrip(tripID));
    history.push("/trips");
  }

  function updateRating(newValue) {
    database.ref("trips/" + tripID + "/rating").set(newValue);
    dispatch(setRating(tripID, newValue));
  }

  return (
    <div className="w-full flex flex-wrap h-full">
      <div className="w-full lg:w-1/2 flex flex-col relative">
        <div className="m-10">
          <div className="flex flex-col md:justify-start">
            <p className="text-center text-3xl">{trip.country}</p>
            <Box component="fieldset" borderColor="transparent">
              <Rating
                className="m-2"
                name="simple-controlled"
                value={trip.rating}
                precision={0.5}
                onChange={(event, newValue) => {
                  updateRating(newValue);
                }}
              />
            </Box>

            <div className="flex justify-between items-center">
              <div>
                <label className="text-lg m-3">
                  {trip.startDate} - {trip.endDate}
                </label>
              </div>
              <div className="flex justify-center items-center"></div>
            </div>

            {trip.cities.map((city) => (
              <div className="flex items-center m-2" key={city}>
                <img
                  className="h-6"
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjU2LDBDMTUzLjc1NSwwLDcwLjU3Myw4My4xODIsNzAuNTczLDE4NS40MjZjMCwxMjYuODg4LDE2NS45MzksMzEzLjE2NywxNzMuMDA0LDMyMS4wMzUNCgkJCWM2LjYzNiw3LjM5MSwxOC4yMjIsNy4zNzgsMjQuODQ2LDBjNy4wNjUtNy44NjgsMTczLjAwNC0xOTQuMTQ3LDE3My4wMDQtMzIxLjAzNUM0NDEuNDI1LDgzLjE4MiwzNTguMjQ0LDAsMjU2LDB6IE0yNTYsMjc4LjcxOQ0KCQkJYy01MS40NDIsMC05My4yOTItNDEuODUxLTkzLjI5Mi05My4yOTNTMjA0LjU1OSw5Mi4xMzQsMjU2LDkyLjEzNHM5My4yOTEsNDEuODUxLDkzLjI5MSw5My4yOTNTMzA3LjQ0MSwyNzguNzE5LDI1NiwyNzguNzE5eiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"
                />
                <div className="">
                  <label className="text-lg ml-1">{city}</label>
                </div>
              </div>
            ))}
          </div>
          {/* <textarea
            placeholder="Trip notes"
            id="tripNotes"
            rows="4"
            className=" rounded border-2 border-gray-400 w-full mt-4 p-2"
          ></textarea> */}
        </div>
        <button
          onClick={deleteTrip}
          className="absolute bottom-0 w-full bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8 mx-auto cursor-pointer"
        >
          Remove trip
        </button>
      </div>

      <div
        className="lg:w-1/2 shadow-2xl  md:mx-auto flex-col bg-red-300"
        style={{ backgroundImage: `url(${bgimageURL})` }}
      ></div>
    </div>
  );
}
