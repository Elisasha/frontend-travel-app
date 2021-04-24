import React from "react";
import { TripCard } from "../components/TripCard";
import { Container } from "../components/Container";
import { getUserTrips } from "../store/trips/actions";
import { useDispatch, useSelector } from "react-redux";

export function Triplist() {
  const { curUser, users, trips } = useSelector((state) => {
    const tripsArray = [];
    for (let key in state.trips) {
      const tempObj = state.trips[key];
      tempObj.trID = key;
      tripsArray.push(tempObj);
    }
    if (state.sort.order === "ASC") {
      tripsArray.sort((a, b) =>
        a[state.sort.type] < b[state.sort.type]
          ? -1
          : a[state.sort.type] > b[state.sort.type]
          ? 1
          : 0
      );
    } else {
      tripsArray.sort((a, b) =>
        a[state.sort.type] > b[state.sort.type]
          ? -1
          : a[state.sort.type] < b[state.sort.type]
          ? 1
          : 0
      );
    }
    return {
      curUser: state.curUser,
      trips: tripsArray,
    };
  });
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getUserTrips(curUser));
  }, []);

  return (
    <Container>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-1 mb-4 px-4">
        {trips.length > 0 ? (
          trips
            .filter(Boolean)
            .map((trip, index) => (
              <TripCard
                {...trip}
                key={trip.startDate + trip.country}
              ></TripCard>
            ))
        ) : (
          <h3>You have not scheduled trips yet</h3>
        )}
      </div>
    </Container>
  );
}
