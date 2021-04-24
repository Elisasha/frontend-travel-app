import { database } from "../../base";

export function addTrip(tripID: string, trip: any) {
    return {
        type: "addTrip",
        payload: { tripID, trip }
    }
}

export function getUserTrips(user: any) {
    return (dispatch: any, getState: any) => {
        const state = getState();
        Object.values(user.trips).forEach(async (trID: any) => {
            // user.trips.forEach(async (trID: any) => {
            if (!state.trips[trID]) {
                const snap = await database.ref('trips/' + trID).get()
                const trip = snap.val();
                dispatch(setUserTrips({ [trID]: trip }))
            }
        });
    }
}

export function setUserTrips(payload: any) {
    return {
        type: "setUserTrips",
        payload
    }
}

export function removeTrip(tripID: string) {
    return {
        type: "removeTrip",
        payload: tripID
    }
}