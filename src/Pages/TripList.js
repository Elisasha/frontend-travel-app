import React from 'react';
import { TripCard } from "../components/TripCard";
import { Container } from '../components/Container';
import { getUserTrips } from '../store/trips/actions';
import { useDispatch, useSelector } from 'react-redux';


export function Triplist() {
    const { curUser, users, trips } = useSelector((state) => { return { curUser: state.curUser, users: state.users, trips: Object.values(state.trips) } });
    const dispatch = useDispatch();
    React.useEffect(() => { dispatch(getUserTrips(curUser)) }, [])
    return (
        <Container>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-1 mb-4 px-4">
                {/* {Object.values(trips).map((trip, index) => <TripCard {...trip} key={index}></TripCard>)} */}
                {trips.map((trip, index) => <TripCard {...trip} key={index}></TripCard>)}
            </div>
        </Container >
    );
}