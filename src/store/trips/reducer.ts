const initialState = {};
export function tripReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'addTrip':
            return {
                ...state,
                [action.payload.tripID]: action.payload.trip
            };
        default:
            return state;
    }
}