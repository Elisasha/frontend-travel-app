import { deprecationHandler } from "moment";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortOrder, setSortType } from "../store/sort/actions";

export function SearchPanel() {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.sort.order);
  return (
    <div className="rounded-t bg-white flex items-center justify-between w-full p-1 shadow-sm border-gray-200 z-10 px-3">
      <div className="text-sm text-gray-500 leading-none inline-flex">
        <button
          className="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-l-full px-1 py-2 active"
          id="grid"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="fill-current w-4 h-4"
          >
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
        </button>
        <button
          className="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-r-full px-1 py-2"
          id="list"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="fill-current w-4 h-4"
          >
            <line x1="8" y1="6" x2="21" y2="6"></line>
            <line x1="8" y1="12" x2="21" y2="12"></line>
            <line x1="8" y1="18" x2="21" y2="18"></line>
            <line x1="3" y1="6" x2="3.01" y2="6"></line>
            <line x1="3" y1="12" x2="3.01" y2="12"></line>
            <line x1="3" y1="18" x2="3.01" y2="18"></line>
          </svg>
        </button>
      </div>
      <div className="w-72 flex items-center border-gray-300 border rounded-full p-1">
        <button className="outline-none focus:outline-none">
          <svg
            className=" w-5 text-gray-600 h-5 cursor-pointer"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
        <input
          type="search"
          placeholder="search for trips"
          x-model="q"
          className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
          onInput={(e) => dispatch(setFilter(e.target.value))}
        ></input>
      </div>
      <div className="select flex items-center">
        <span className="text-sm m-2 hidden lg:block">Sort by:</span>
        <div className="border-gray-300 border rounded-full p-1">
          <select
            onChange={(e) => dispatch(setSortType(e.target.value))}
            className="text-sm outline-none focus:outline-none bg-transparent cursor-pointer"
          >
            <option value="country">name</option>
            <option value="startDate" selected>
              date
            </option>
            <option value="rating">rating</option>
          </select>
        </div>
        <div>
          <div className="hidden">
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/bqlqn" title="bqlqn">
              bqlqn
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
          {/* order bi */}
          <button
            onClick={() =>
              dispatch(setSortOrder(order === "ASC" ? "DSC" : "ASC"))
            }
            className="inline-flex items-center transition-colors duration-300 ease-in focus:outline-none hover:text-blue-400 focus:text-blue-400 rounded-l-full px-1 py-2 active"
          >
            <svg
              style={{
                transform: order === "ASC" ? undefined : "rotate(180deg)",
              }}
              className="h-5"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M374.176,110.386l-104-104.504c-0.006-0.006-0.013-0.011-0.019-0.018c-7.818-7.832-20.522-7.807-28.314,0.002
			c-0.006,0.006-0.013,0.011-0.019,0.018l-104,104.504c-7.791,7.829-7.762,20.493,0.068,28.285
			c7.829,7.792,20.492,7.762,28.284-0.067L236,68.442V492c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V68.442l69.824,70.162
			c7.792,7.829,20.455,7.859,28.284,0.067C381.939,130.878,381.966,118.214,374.176,110.386z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
