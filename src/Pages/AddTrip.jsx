import React from "react";
import { UserCard } from "../components/UserCard";

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
                                <input type="email" id="email" placeholder="Iceland" class="xl:w-1/3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"></input>
                            </div>
                            {/* <div class="flex flex-col pt-4"> */}

                            {/* <div className="flex items-center"> */}
                            {/* <div> */}
                            {/* <input type="city" placeholder="London" class="xl:w-1/3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"></input> */}
                            {/* </div> */}
                            {/* <div> */}
                            {/* <svg className="flex" height="20" viewBox="0 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m256 512c-141.164062 0-256-114.835938-256-256s114.835938-256 256-256 256 114.835938 256 256-114.835938 256-256 256zm0-480c-123.519531 0-224 100.480469-224 224s100.480469 224 224 224 224-100.480469 224-224-100.480469-224-224-224zm0 0" /><path d="m368 272h-224c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h224c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" />
                                    <path d="m256 384c-8.832031 0-16-7.167969-16-16v-224c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v224c0 8.832031-7.167969 16-16 16zm0 0" />
                                </svg> */}
                            {/* </div> */}
                            {/* </div> */}
                            {/* </div> */}


                            <label for="city" class="text-lg  pt-4">Cities:</label>
                            <div class="flex flex-wrap items-stretch w-full mb-4 relative lg:w-1/3">
                                <input type="city" placeholder="Reykjavik" class="shadow appearance-none flex-shrink flex-grow flex-auto leading-normal w-px border rounded h-10 px-3 relative" ></input>
                                <div class="flex -mr-px">
                                    <button class="shadow appearance-none flex items-center leading-normal bg-grey-lighter rounded rounded-l-none border border-l-0 px-3 whitespace-no-wrap text-grey-dark text-sm">+</button>
                                </div>
                            </div>
                            <div class="flex flex-col pt-4 xl:w-1/3">
                                <input type="submit" value="Add" class="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"></input>
                            </div>

                        </form>
                    </div>
                </main>
            </div>
        </section>
    );
}