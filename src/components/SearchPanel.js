import React from "react";

export function SearchPanel() {
    return (
        < div className="box" >
            <div className="box-wrapper">
                <div className=" bg-white flex items-center justify-between w-full p-1 shadow-sm border-gray-200">
                    {/* <div className="bg-gray-200 text-sm text-gray-500 leading-none border-2 border-gray-200 rounded-full inline-flex"> */}
                    <div className="text-sm text-gray-500 leading-none inline-flex">
                        <button className="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-l-full px-1 py-2 active" id="grid">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="fill-current w-4 h-4"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                            {/* <span>Grid</span> */}
                        </button>
                        <button className="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-r-full px-1 py-2" id="list">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="fill-current w-4 h-4"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                            {/* <span>List</span> */}
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

                    <div className="select flex">
                        <span className="text-sm m-2 hidden lg:block">Sort by:</span>
                        <div className="border-gray-300 border rounded-full p-1">
                            <select name="" id="" className="text-sm outline-none focus:outline-none bg-transparent items-center">
                                <option value="name" selected>name asc</option>
                                <option value="name" selected>name desc</option>
                                <option value="date">date asc</option>
                                <option value="date">date desc</option>
                                <option value="rating">rating asc</option>
                                <option value="rating">rating desc</option>
                                {/* <option value="vector">Vector</option> */}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
}