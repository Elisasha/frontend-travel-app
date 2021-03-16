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
        {/* <div className=""> */}
        <div className="card border max-w-6xl hover:shadow-none relative flex flex-col mx-auto shadow-lg m-5">
          <div class="flex items-center flex-wrap justify-center">
            {Array.from({ length: 9 }).map(TripCard)}
          </div>
        </div>
      </div>
    </Container>
  );
}
