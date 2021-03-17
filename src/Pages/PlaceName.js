import React from "react";

import { Container } from "../components/Container";
import { TripCard } from "../components/TripCard";

export function PlaceName() {
  return (
    <Container>
      <div className="py-5 px-20">
        <h1 className="text-gray-800 text-4xl font-semibold text-center">
          My trips
        </h1>
        {/* place two following divs into Container component */}
        <div className="card max-w-screen-2xl hover:shadow-none relative flex flex-col mx-auto m-5">
          <div className="flex items-center flex-wrap">
            {Array.from({ length: 9 }).map(index => <TripCard key={index}></TripCard>)}
          </div>
        </div>
      </div>
    </Container>
  );
}
