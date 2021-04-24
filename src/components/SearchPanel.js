import React from "react";
import { setSortType } from "../store/sort/actions";
import { getSortedTrips } from "../store/sort/selector";

export function SearchPanel() {
    const dispatch = useDispatch();
    return (
        <div className="rounded-t bg-white flex items-center justify-between w-full p-1 shadow-sm border-gray-200 z-10 px-3">
            <div className="text-sm text-gray-500 leading-none inline-flex">
                <button className="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-l-full px-1 py-2 active" id="grid">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="fill-current w-4 h-4"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                </button>
                <button className="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-r-full px-1 py-2" id="list">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="fill-current w-4 h-4"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                </button>
            </div>
            <div className="w-72 flex items-center border-gray-300 border rounded-full p-1">
                <button className="outline-none focus:outline-none">
                    <svg className=" w-5 text-gray-600 h-5 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>
                <input type="search" name="" placeholder="search for trips" x-model="q" className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"></input>
            </div>
            <div className="select flex items-center">
                <span className="text-sm m-2 hidden lg:block">Sort by:</span>
                <div className="border-gray-300 border rounded-full p-1">
                    <select name="" id="" className="text-sm outline-none focus:outline-none bg-transparent">
                        <option value="name" selected onChange={() => dispatch(setSortType("sortByName"))}>name</option>
                        <option value="date">date</option>
                        <option value="rating">rating</option>
                    </select>
                </div>
                <div>
                    <div className="hidden" >Icons made by <a href="https://www.flaticon.com/authors/bqlqn" title="bqlqn">bqlqn</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    <button className="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-l-full px-1 py-2 active" >
                        <svg className="h-6" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                            <path d="m31.414 15.586-7-7c-.78-.781-2.048-.781-2.828 0l-7 7c-.781.781-.781 2.047 0 2.828.78.781 2.048.781 2.828 0l3.586-3.586v39.172c0 1.104.896 2 2 2s2-.896 2-2v-39.172l3.586 3.586c.39.391.902.586 1.414.586s1.024-.195 1.414-.586c.781-.781.781-2.047 0-2.828z" /><path d="m49.414 45.586c-.781-.781-2.047-.781-2.828 0l-3.586 3.586v-39.172c0-1.104-.896-2-2-2s-2 .896-2 2v39.172l-3.586-3.586c-.781-.781-2.048-.781-2.828 0-.781.781-.781 2.047 0 2.828l7 7c.391.391.902.586 1.414.586s1.023-.195 1.414-.586l7-7c.781-.781.781-2.047 0-2.828z" /></svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
