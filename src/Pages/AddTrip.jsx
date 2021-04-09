import React, { useState } from "react";
import { Calendar } from "../components/Calendar";
import '../components/Calendar.css';
import { Container } from "../components/Container";
import firebase from '../base';

export function AddTrip() {
    const [cities, setCities] = useState([{ value: null }]);
    const [country, setCountry] = useState();
    const [tripID, setTripID] = useState();

    function handleChange(i, event) {
        const values = [...cities];
        values[i].value = event.target.value;
        setCities(values);
    }

    function handleAdd() {
        const values = [...cities];
        values.push({ value: null });
        setCities(values);
    }

    function handleRemove(i) {
        const values = [...cities];
        values.splice(i, 1);
        setCities(values);
    }

    function handleSubmit() {
        setTripID(Math.random().toString(36).substr(2, 9))
        // database.ref() and firebase.database().ref ask Slava
        firebase.database().ref('trips/' + tripID).set({
            country: country,
            startDate: document.getElementById('tata-start-date').value,
            endDate: document.getElementById('tata-end-date').value,
            cities: cities
        });
        //add redirect to trip page
        console.log('send to db: trip id[' + tripID + ']')
    }

    return (
        <Container>
            <div className="p-10">
                <form className="flex flex-col pt-3" onSubmit={(event) => event.preventDefault()}>
                    <div className="flex flex-col pt-4 xl:w-2/5">
                        <label for="tripName" className="text-lg">Trip name</label>
                        <input id="tripName" placeholder="Iceland" value={country} onChange={e => setCountry(e.target.value)} className="appearance-none border w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"></input>
                    </div>
                    <Calendar />
                    <label for="city" className="text-lg  pt-4">Cities</label>
                    {cities.map((city, idx) => {
                        return (
                            <div key={`${city}-${idx}`}>
                                <div className="flex flex-wrap items-stretch w-full mb-4 relative xl:w-2/5">
                                    <input type="city" value={city.value || ""} onChange={e => handleChange(idx, e)} placeholder="Reykjavik" className="appearance-none flex-shrink flex-grow flex-auto leading-normal focus:outline-none border h-10 px-3 relative" ></input>
                                    <div className="flex -mr-px">
                                        {idx > 0
                                            ? <button type="button" onClick={() => handleRemove(idx)} className="w-8 appearance-none flex items-center leading-normal bg-grey-lighter rounded-l-none border border-l-0 px-3 whitespace-no-wrap text-grey-dark text-sm">-</button>
                                            : <button type="button" onClick={() => handleAdd()} className="w-8 w-0appearance-none flex items-center leading-normal bg-grey-lighter rounded-l-none border border-l-0 px-3 whitespace-no-wrap text-grey-dark text-sm">+</button>
                                        }
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                    <div className="flex flex-col pt-4 xl:w-2/5">
                        <input type="submit" onClick={() => handleSubmit()} value="Add" className="bg-black text-white font-bold text-lg p-2 mt-8"></input>
                    </div>
                </form>
            </div>
        </Container>
    );
}