export function addTrip(tripID: string, trip: any) {
    return {
        type: "addTrip",
        payload: { tripID, trip }
    }
}