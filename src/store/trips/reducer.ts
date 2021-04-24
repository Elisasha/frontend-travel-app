const initialState: Record<string, any> = {};
export function tripReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'addTrip':
            return {
                ...state,
                [action.payload.tripID]: action.payload.trip
            };
        case 'setUserTrips':
            return {
                ...state, ...action.payload
            };
        case 'removeTrip':

        const {[action.payload as string] : _, ...restTr} = state;
            return restTr;
        default:
            return state;
    }
}