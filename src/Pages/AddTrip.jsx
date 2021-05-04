import React, { useState } from "react";
import { Calendar } from "../components/Calendar";
import "../components/Calendar.css";
import { useDispatch, useSelector } from "react-redux";
import { database } from "../base";
import { useHistory } from "react-router-dom";
import { addTrip } from "../store/trips/actions";

export function AddTrip() {
  const uid = useSelector((state) => state.curUser.uid);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [cities, setCities] = useState([""]);
  const [country, setCountry] = useState();
  const history = useHistory();
  const dispatch = useDispatch();

  function handleChange(i, event) {
    const values = [...cities];
    values[i] = event.target.value;
    setCities(values);
  }

  function handleAdd() {
    const values = [...cities];
    values.push("");
    setCities(values);
  }

  function handleRemove(i) {
    const values = [...cities];
    values.splice(i, 1);
    setCities(values);
  }

  function handleSubmit() {
    const trip = {
      country,
      startDate: startDate.format("MM/DD/yyyy"),
      endDate: endDate.format("MM/DD/yyyy"),
      cities,
    };
    const tripID = Math.random().toString(36).substr(2, 9);
    database.ref("trips/" + tripID).set(trip);
    database.ref("users/" + uid + "/trips").push(tripID);
    //add redirect to trip page
    console.log("send to db: trip id[" + tripID + "]");
    dispatch(addTrip(tripID, trip));
    history.push("/" + uid + "/trips/" + tripID);
  }

  return (
    <div className="lg:p-10 p-4">
      <form
        className="flex flex-col "
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="flex flex-col lg:pt-4">
          <label for="tripName" className="text-lg">
            Trip name
          </label>
          <input
            id="tripName"
            placeholder="Iceland"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="appearance-none border w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
          ></input>
        </div>
        <Calendar
          startDate={startDate}
          endDate={endDate}
          setEndDate={setEndDate}
          setStartDate={setStartDate}
        />
        <label for="city" className="text-lg  pt-4">
          Cities
        </label>
        {cities.map((city, idx) => {
          return (
            <div key={idx}>
              <div className="flex flex-wrap items-stretch w-full mb-4 relative">
                <input
                  type="text"
                  value={city}
                  onChange={(e) => handleChange(idx, e)}
                  placeholder="Reykjavik"
                  className="appearance-none flex-shrink flex-grow flex-auto leading-normal focus:outline-none border h-10 px-3 relative"
                ></input>
                <div className="flex -mr-px">
                  {idx > 0 ? (
                    <button
                      type="button"
                      onClick={() => handleRemove(idx)}
                      className="w-8 appearance-none flex items-center leading-normal bg-grey-lighter rounded-l-none border border-l-0 px-3 whitespace-no-wrap text-grey-dark text-sm"
                    >
                      -
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleAdd()}
                      className="w-8 w-0appearance-none flex items-center leading-normal bg-grey-lighter rounded-l-none border border-l-0 px-3 whitespace-no-wrap text-grey-dark text-sm"
                    >
                      +
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        <div className="flex flex-col pt-4">
          <input
            type="submit"
            onClick={() => handleSubmit()}
            value="Add"
            className="bg-black text-white font-bold text-lg p-2 mt-8 hover:bg-gray-700 cursor-pointer"
          ></input>
        </div>
      </form>
    </div>
  );
}
