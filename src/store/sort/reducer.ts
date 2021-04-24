const initialState = {};
export function sortReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'setSortType':
            return {
                ...state, sortType: action.payload
            };
        default:
            return state;
    }
}