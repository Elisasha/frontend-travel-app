import React, { useState } from "react";
import { Calendar } from "../components/Calendar";
import { UserCard } from "../components/UserCard";
import '../components/Calendar.css';

export function AddTrip() {
    const [cities, setCities] = useState([{ value: null }]);

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

    return (
        <section className="section">
            <div className="container mx-auto">
                <main className="main">
                    <UserCard />
                    <div className="content-area bg-white rounded overflow-hidden shadow-lg p-10">
                        <form class="flex flex-col pt-3" onsubmit="event.preventDefault();">
                            <div class="flex flex-col pt-4 xl:w-2/5">
                                <label for="tripName" class="text-lg">Trip name</label>
                                <input id="tripName" placeholder="Iceland" class="appearance-none border w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"></input>
                            </div>
                            <Calendar />
                            <label for="city" class="text-lg  pt-4">Cities</label>
                            {cities.map((city, idx) => {
                                return (
                                    <div key={`${city}-${idx}`}>
                                        <div class="flex flex-wrap items-stretch w-full mb-4 relative xl:w-2/5">
                                            <input type="city" value={city.value || ""} onChange={e => handleChange(idx, e)} placeholder="Reykjavik" class="appearance-none flex-shrink flex-grow flex-auto leading-normal focus:outline-none border h-10 px-3 relative" ></input>
                                            <div class="flex -mr-px">
                                                {idx > 0
                                                    ? <button type="button" onClick={() => handleRemove(idx)} class="w-8 appearance-none flex items-center leading-normal bg-grey-lighter rounded-l-none border border-l-0 px-3 whitespace-no-wrap text-grey-dark text-sm">-</button>
                                                    : <button type="button" onClick={() => handleAdd()} class="w-8 w-0appearance-none flex items-center leading-normal bg-grey-lighter rounded-l-none border border-l-0 px-3 whitespace-no-wrap text-grey-dark text-sm">+</button>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                            <div class="flex flex-col pt-4 xl:w-2/5">
                                <input type="submit" value="Add" class="bg-black text-white font-bold text-lg p-2 mt-8"></input>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>
    );
}