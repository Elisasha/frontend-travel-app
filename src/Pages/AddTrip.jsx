import React from "react";
import { Calendar } from "../components/Calendar";
import { UserCard } from "../components/UserCard";
import "react-dates/lib/css/_datepicker.css";


export function AddTrip() {
    return (
        <section className="section">
            <div className="container mx-auto">
                <main className="main">
                    <UserCard />
                    <div className="content-area bg-white rounded overflow-hidden shadow-lg p-10">
                        <form class="flex flex-col pt-3" onsubmit="event.preventDefault();">
                            <div class="flex flex-col pt-4">
                                <label for="tripName" class="text-lg">Trip name</label>
                                <input id="tripName" placeholder="Iceland" class="lg:w-1/2 appearance-none border w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"></input>
                            </div>

                            {/* <div class="flex flex-col pt-4"> */}
                                {/* <label for="tripName" class="text-lg">Trip name</label> */}
                                <Calendar />
                            {/* </div> */}
                            <label for="city" class="text-lg  pt-4">Cities</label>
                            <div class="flex flex-wrap items-stretch w-full mb-4 relative lg:w-1/2">
                                <input type="city" placeholder="Reykjavik" class="appearance-none flex-shrink flex-grow flex-auto leading-normal focus:outline-none w-px border h-10 px-3 relative" ></input>
                                <div class="flex -mr-px">
                                    <button class="appearance-none flex items-center leading-normal bg-grey-lighter rounded-l-none border border-l-0 px-3 whitespace-no-wrap text-grey-dark text-sm">+</button>
                                </div>
                            </div>
                            <div class="flex flex-col pt-4 xl:w-1/3">
                                <input type="submit" value="Add" class="bg-black text-white font-bold text-lg p-2 mt-8"></input>
                            </div>

                        </form>
                    </div>
                </main>
            </div>
        </section>
    );
}

