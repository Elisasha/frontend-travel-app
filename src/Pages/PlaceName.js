import React from "react";

import { Container } from "../components/Container";
import { TripCard } from "../components/TripCard";

export function PlaceName() {
  return (
    <Container>
      <div className="py-20 px-20">
        <h1 className="text-gray-800 text-4xl font-semibold text-center">
          My trips
        </h1>
        {/* <div className=""> */}
          <div class="flex items-center flex-wrap">
          {Array.from({ length:  8}).map(TripCard)}
        </div>
      </div>
    </Container>
  );
}
